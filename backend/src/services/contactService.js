import { validateContactSubmission } from '../validation/contact.js';
import { insertContactSubmission } from '../db/contactStore.js';

export function saveContactSubmission(rawSubmission) {
  const validation = validateContactSubmission(rawSubmission);

  if (!validation.ok) {
    return {
      ok: false,
      errors: validation.errors
    };
  }

  const submissionId = insertContactSubmission(validation.normalized);

  return {
    ok: true,
    id: submissionId,
    message: 'Thank you for reaching out!'
  };
}
