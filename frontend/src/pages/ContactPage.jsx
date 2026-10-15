import { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitContactForm } from '../services/contactApi.js';
import { validateContactForm } from '../validation/contactForm.js';

const initialFormState = {
  name: '',
  email: '',
  message: ''
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [serverErrors, setServerErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousValues) => ({
      ...previousValues,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: undefined
      }));
    }

    if (serverErrors.length > 0) {
      setServerErrors([]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setServerErrors([]);
      setSuccessMessage('');
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setServerErrors([]);
    setSuccessMessage('');

    const result = await submitContactForm(validation.values);

    if (!result.ok) {
      setServerErrors(result.errors);
      setIsSubmitting(false);
      return;
    }

    setFormData(initialFormState);
    setSuccessMessage(result.message);
    setIsSubmitting(false);
  };

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link to="/" className="back-link">← Back home</Link>
        <h1>Contact Us</h1>
      </header>

      <main className="form-panel">
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </label>

          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </label>

          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </label>

          {serverErrors.length > 0 && (
            <div className="server-errors" role="alert">
              {serverErrors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}

          {successMessage && (
            <div className="success-message" role="status">
              {successMessage}
            </div>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </main>
    </div>
  );
}
