document.getElementById('quote-btn').addEventListener('click', () =>
  document.getElementById('quote').scrollIntoView({ behavior: 'smooth' })
);

document.getElementById('quote-form').addEventListener('submit', async e => {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Sending request...';
  await new Promise(r => setTimeout(r, 1000));
  msg.textContent = 'Thank you! We’ll contact you shortly.';
  e.target.reset();
});
