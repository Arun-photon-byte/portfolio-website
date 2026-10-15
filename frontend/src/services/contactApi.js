export async function submitContactForm(payload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      ok: false,
      errors: data.errors ?? ['Unable to submit your message right now.']
    };
  }

  return {
    ok: true,
    message: data.message
  };
}
