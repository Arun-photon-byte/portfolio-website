export function validateContactSubmission(rawSubmission = {}) {
  const name = String(rawSubmission.name ?? '').trim();
  const email = String(rawSubmission.email ?? '').trim();
  const message = String(rawSubmission.message ?? '').trim();
  const errors = [];

  if (!name) {
    errors.push('Name is required.');
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Email is invalid.');
  }

  if (!message) {
    errors.push('Message is required.');
  }

  return {
    ok: errors.length === 0,
    errors,
    normalized: {
      name,
      email,
      message
    }
  };
}
