const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

const rules = {
  name: {
    test: (value) => value.trim().length >= 2,
    message: 'Please enter your name (at least 2 characters).',
  },
  email: {
    test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    message: 'Please enter a valid email address.',
  },
  message: {
    test: (value) => value.trim().length >= 10,
    message: 'Please write at least 10 characters.',
  },
};

const fields = [...form.querySelectorAll('input, textarea')];

function validateField(field) {
  const rule = rules[field.name];
  const message = rule.test(field.value) ? '' : rule.message;
  document.getElementById(`${field.name}-error`).textContent = message;
  field.setAttribute('aria-invalid', String(message !== ''));
  return message === '';
}

fields.forEach((field) => {
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => {
    if (field.getAttribute('aria-invalid') === 'true') validateField(field);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const results = fields.map(validateField);
  const firstInvalid = fields[results.indexOf(false)];
  if (firstInvalid) {
    formStatus.textContent = 'Please correct the highlighted fields.';
    firstInvalid.focus();
    return;
  }

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const subject = encodeURIComponent(`Website enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  window.location.href = `mailto:kim@eqit.ai?subject=${subject}&body=${body}`;
  formStatus.textContent = 'Your email app should open with your message. If it does not, email kim@eqit.ai directly.';
});
