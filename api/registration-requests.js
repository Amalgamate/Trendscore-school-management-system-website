const requiredFields = [
  'institutionName',
  'institutionType',
  'packageName',
  'learnerPopulation',
  'county',
  'subCounty',
  'contactName',
  'phone',
  'email'
];

const readJsonBody = async (request) => {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
};

const postWebhook = async (url, payload) => {
  if (!url) {
    return { configured: false };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.CRM_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.CRM_WEBHOOK_TOKEN}` } : {})
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`);
  }

  return { configured: true, ok: true };
};

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method not allowed' });
  }

  let body;

  try {
    body = await readJsonBody(request);
  } catch {
    return response.status(400).json({ message: 'Invalid registration request.' });
  }

  const missingField = requiredFields.find((field) => !body[field]);

  if (missingField) {
    return response.status(400).json({ message: `Missing required field: ${missingField}` });
  }

  const approvalRef = `TS-${Date.now().toString(36).toUpperCase()}`;
  const approvalPayload = {
    ...body,
    approvalRef,
    workflow: {
      ...body.workflow,
      source: 'website_registration',
      approvalStatus: 'pending_admin_approval',
      createAdminApproval: true,
      notifyCrmAdmins: true,
      sendSms: true
    },
    crmRecordType: 'institution_registration_approval',
    receivedAt: new Date().toISOString()
  };

  try {
    const crm = await postWebhook(process.env.CRM_REGISTRATION_WEBHOOK_URL, approvalPayload);
    const sms = await postWebhook(process.env.SMS_REGISTRATION_WEBHOOK_URL, {
      approvalRef,
      institutionName: body.institutionName,
      packageName: body.packageName,
      adminNotification: true,
      contactSms: body.smsPhone || body.phone,
      messageType: 'institution_registration_pending_approval'
    });

    return response.status(201).json({
      approvalRef,
      status: 'pending_admin_approval',
      crm,
      sms
    });
  } catch (error) {
    return response.status(502).json({
      message: 'Registration was received but could not be delivered to the CRM or SMS workflow.',
      detail: error.message
    });
  }
}
