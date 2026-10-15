export function validateContactForm(values = {}) {
  const name = String(values.name ?? '').trim();
  const email = String(values.email ?? '').trim();
  const message = String(values.message ?? '').trim();

  const errors = {};

  if (!name) {
    errors.name = 'Name is required.';
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Message is required.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    values: {
      name,
      email,
      message
    }
  };
}
