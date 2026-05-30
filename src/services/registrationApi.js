const REGISTRATION_ENDPOINT =
  import.meta.env.VITE_REGISTRATION_API_URL || '/api/registration-requests';

export async function submitRegistrationRequest(data) {
  const response = await fetch(REGISTRATION_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    let message = 'Registration request could not be submitted.';

    try {
      const body = await response.json();
      message = body.message || message;
    } catch {
      // Keep the default message when the API does not return JSON.
    }

    throw new Error(message);
  }

  return response.json();
}
