import React, { useMemo, useState } from 'react';
import {
  BellRing,
  CheckCircle2,
  ClipboardCheck,
  Loader2,
  MessageSquareText,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { submitRegistrationRequest } from '../services/registrationApi';

const institutionTypes = [
  'Early Learning Centre',
  'Primary School',
  'Junior Secondary School',
  'Senior Secondary School',
  'Combined Basic Education School',
  'TVET Institution',
  'College / University',
  'Multi-Campus Group'
];

const packages = [
  {
    value: 'Basic Plan',
    label: 'Basic Plan',
    description: 'Core school ERP with academics, fees, portals, onboarding, and first-month free setup.'
  },
  {
    value: 'Enterprise Plan',
    label: 'Enterprise Plan',
    description: 'Advanced rollout for groups, custom modules, biometrics, transport, POS, and integrations.'
  }
];

const moduleOptions = [
  'Academics & CBE Assessment',
  'Fees, Billing & Receipts',
  'Parent, Teacher & Learner Portals',
  'SMS & WhatsApp Alerts',
  'Biometrics Attendance',
  'Transport / GPRS',
  'POS & Inventory',
  'Odoo / Accounting Integration'
];

const initialFormData = {
  institutionName: '',
  institutionType: 'Primary School',
  packageName: 'Basic Plan',
  learnerPopulation: '',
  campuses: '1',
  curriculum: 'CBC / CBE',
  county: '',
  subCounty: '',
  physicalAddress: '',
  contactName: '',
  contactRole: 'Director / Proprietor',
  phone: '',
  smsPhone: '',
  email: '',
  preferredStartMonth: '',
  modules: ['Academics & CBE Assessment', 'Fees, Billing & Receipts', 'Parent, Teacher & Learner Portals'],
  notes: '',
  consent: false
};

const Register = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [approvalRef, setApprovalRef] = useState('');

  const selectedPackage = useMemo(
    () => packages.find((item) => item.value === formData.packageName) || packages[0],
    [formData.packageName]
  );

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' && name === 'consent' ? checked : value
    }));
  };

  const handleModuleChange = (event) => {
    const { value, checked } = event.target;

    setFormData((current) => ({
      ...current,
      modules: checked
        ? [...current.modules, value]
        : current.modules.filter((item) => item !== value)
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    const payload = {
      ...formData,
      learnerPopulation: Number(formData.learnerPopulation),
      campuses: Number(formData.campuses),
      workflow: {
        source: 'website_registration',
        approvalStatus: 'pending_admin_approval',
        createAdminApproval: true,
        notifyCrmAdmins: true,
        sendSms: true,
        smsRecipients: ['admins', 'primary_contact']
      },
      submittedAt: new Date().toISOString()
    };

    try {
      const result = await submitRegistrationRequest(payload);
      setApprovalRef(result.approvalRef || result.id || 'Pending CRM approval');
      setStatus('submitted');
    } catch (submissionError) {
      setError(submissionError.message);
      setStatus('error');
    }
  };

  if (status === 'submitted') {
    return (
      <div className="registration-success-wrap">
        <div className="registration-success-card">
          <CheckCircle2 size={64} className="registration-success-icon" />
          <span className="badge badge-teal">Approval Created</span>
          <h1>Registration request received</h1>
          <p>
            The request for <strong>{formData.institutionName}</strong> has been sent to the admin console for approval.
            Admins will be notified in the CRM, and SMS notifications will be triggered for the approval workflow.
          </p>
          <div className="registration-summary">
            <div><strong>Approval Ref:</strong> {approvalRef}</div>
            <div><strong>Institution Type:</strong> {formData.institutionType}</div>
            <div><strong>Package:</strong> {formData.packageName}</div>
            <div><strong>SMS Contact:</strong> {formData.smsPhone || formData.phone}</div>
          </div>
          <a href="/" className="btn btn-primary">Return to Homepage</a>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <div className="container registration-layout">
        <aside className="registration-aside">
          <span className="badge badge-orange">Institution Registration</span>
          <h1>Register your institution for TrendScore</h1>
          <p>
            Submit the institution profile, preferred package, and approval contacts. The request is routed to admins
            for CRM review before activation.
          </p>

          <div className="registration-process">
            <div className="contact-item-row">
              <div className="contact-icon-box"><ClipboardCheck size={20} /></div>
              <div>
                <h4>Admin Approval</h4>
                <p>A pending approval is created for administrators in the CRM workflow.</p>
              </div>
            </div>
            <div className="contact-item-row">
              <div className="contact-icon-box"><BellRing size={20} /></div>
              <div>
                <h4>CRM Notification</h4>
                <p>Admins receive the registration details for verification and onboarding assignment.</p>
              </div>
            </div>
            <div className="contact-item-row">
              <div className="contact-icon-box"><MessageSquareText size={20} /></div>
              <div>
                <h4>SMS Workflow</h4>
                <p>SMS alerts are requested for the admin approval and primary institution contact.</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="registration-form-panel">
          <div className="registration-form-head">
            <div>
              <span className="badge badge-teal">Pending Approval</span>
              <h2>Institution Details</h2>
            </div>
            <ShieldCheck size={28} />
          </div>

          {error && (
            <div className="registration-error" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="institutionName">Institution Name</label>
              <input
                type="text"
                id="institutionName"
                name="institutionName"
                className="form-control"
                placeholder="e.g. Green Valley Academy"
                value={formData.institutionName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="institutionType">Institution Type</label>
                <select
                  id="institutionType"
                  name="institutionType"
                  className="form-control"
                  value={formData.institutionType}
                  onChange={handleChange}
                  required
                >
                  {institutionTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="packageName">Package</label>
                <select
                  id="packageName"
                  name="packageName"
                  className="form-control"
                  value={formData.packageName}
                  onChange={handleChange}
                  required
                >
                  {packages.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="registration-package-note">
              <Sparkles size={18} />
              <span>{selectedPackage.description}</span>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="learnerPopulation">Learner / User Population</label>
                <input
                  type="number"
                  id="learnerPopulation"
                  name="learnerPopulation"
                  className="form-control"
                  min="1"
                  placeholder="e.g. 450"
                  value={formData.learnerPopulation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="campuses">Number of Campuses</label>
                <input
                  type="number"
                  id="campuses"
                  name="campuses"
                  className="form-control"
                  min="1"
                  value={formData.campuses}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="curriculum">Curriculum / Program</label>
                <input
                  type="text"
                  id="curriculum"
                  name="curriculum"
                  className="form-control"
                  placeholder="CBC, IGCSE, TVET, university programs"
                  value={formData.curriculum}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="preferredStartMonth">Preferred Start Month</label>
                <input
                  type="month"
                  id="preferredStartMonth"
                  name="preferredStartMonth"
                  className="form-control"
                  value={formData.preferredStartMonth}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="county">County</label>
                <input
                  type="text"
                  id="county"
                  name="county"
                  className="form-control"
                  placeholder="e.g. Nairobi"
                  value={formData.county}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subCounty">Sub-County</label>
                <input
                  type="text"
                  id="subCounty"
                  name="subCounty"
                  className="form-control"
                  placeholder="e.g. Westlands"
                  value={formData.subCounty}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="physicalAddress">Physical Address</label>
              <input
                type="text"
                id="physicalAddress"
                name="physicalAddress"
                className="form-control"
                placeholder="Building, road, estate, or town"
                value={formData.physicalAddress}
                onChange={handleChange}
                required
              />
            </div>

            <h3 className="registration-section-title">Approval Contact</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="contactName">Contact Name</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  className="form-control"
                  placeholder="Full name"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactRole">Role</label>
                <input
                  type="text"
                  id="contactRole"
                  name="contactRole"
                  className="form-control"
                  value={formData.contactRole}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="e.g. 0712345678"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="smsPhone">SMS Number</label>
                <input
                  type="tel"
                  id="smsPhone"
                  name="smsPhone"
                  className="form-control"
                  placeholder="Leave blank to use phone number"
                  value={formData.smsPhone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="e.g. director@school.co.ke"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <h3 className="registration-section-title">Modules Needed</h3>
            <div className="registration-checkbox-grid">
              {moduleOptions.map((module) => (
                <label key={module} className="registration-checkbox">
                  <input
                    type="checkbox"
                    value={module}
                    checked={formData.modules.includes(module)}
                    onChange={handleModuleChange}
                  />
                  <span>{module}</span>
                </label>
              ))}
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                className="form-control"
                rows="4"
                placeholder="Anything admins should know before approving this institution"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <label className="registration-consent">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <span>I confirm the details are accurate and authorize TrendScore admins to contact this institution by phone, email, and SMS for registration approval.</span>
            </label>

            <button type="submit" className="btn btn-primary registration-submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="registration-spinner" />
                  Submitting Registration
                </>
              ) : (
                'Submit for Admin Approval'
              )}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
