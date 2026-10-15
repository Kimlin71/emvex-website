// ── MOBILE NAVIGATION ────────────────────────────────────────────────────────
// querySelector finds the first element matching a CSS selector.
// getElementById is slightly faster when you know the exact id.
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

/**
 * Opens or closes the mobile navigation menu.
 * @param {boolean} open - true to open, false to close
 */
function setMenu(open) {
  // aria-expanded communicates the open/closed state to screen readers
  toggle.setAttribute('aria-expanded', String(open));
  // classList.toggle(className, force) adds the class when force is true, removes it when false
  nav.classList.toggle('is-open', open);
}

// Toggle the menu when the hamburger button is clicked
toggle.addEventListener('click', () => {
  // If aria-expanded is already "true" the menu is open, so close it; otherwise open it
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

// Close the menu when the user clicks any link inside the navigation
nav.addEventListener('click', (event) => {
  // event.target is the element that was actually clicked;
  // .closest('a') walks up the DOM tree to find the nearest <a> ancestor
  if (event.target.closest('a')) setMenu(false);
});

// Close the menu when the user presses the Escape key (good for accessibility)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

// ── CONTACT FORM VALIDATION ───────────────────────────────────────────────────

// Grab the form and the status message element from the HTML
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// Validation rules for each field.
// Each rule has:
//   test   – a function that returns true if the value is valid
//   message – the error text shown to the user when invalid
const rules = {
  name: {
    test: (value) => value.trim().length >= 2, // .trim() removes leading/trailing spaces
    message: 'Please enter your name (at least 2 characters).',
  },
  email: {
    // A regular expression that checks for a basic "something@something.something" shape
    test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    message: 'Please enter a valid email address.',
  },
  message: {
    test: (value) => value.trim().length >= 10,
    message: 'Please write at least 10 characters.',
  },
};

// Collect all <input> and <textarea> elements inside the form into an array.
// The spread operator [...] converts a NodeList into a plain JavaScript array.
const fields = [...form.querySelectorAll('input, textarea')];

/**
 * Validates a single field against its rule and updates the error message.
 * @param {HTMLElement} field - the input or textarea to validate
 * @returns {boolean} true if the field is valid
 */
function validateField(field) {
  const rule = rules[field.name];
  // If the test passes, use an empty string (no error); otherwise use the error message
  const message = rule.test(field.value) ? '' : rule.message;
  // Show or clear the error text next to the field
  document.getElementById(`${field.name}-error`).textContent = message;
  // aria-invalid="true" tells screen readers the field has a problem
  field.setAttribute('aria-invalid', String(message !== ''));
  return message === ''; // return true means "field is valid"
}

// Attach live validation to each field
fields.forEach((field) => {
  // Validate when the user leaves a field (blur = losing focus)
  field.addEventListener('blur', () => validateField(field));
  // Re-validate on every keystroke, but only if the field already has an error
  // (avoids showing errors while the user is still typing for the first time)
  field.addEventListener('input', () => {
    if (field.getAttribute('aria-invalid') === 'true') validateField(field);
  });
});

// Handle form submission
form.addEventListener('submit', (event) => {
  // Prevent the browser from reloading the page (its default submit behaviour)
  event.preventDefault();

  // Validate all fields and collect true/false results
  const results = fields.map(validateField);
  // Find the first field that failed (results.indexOf(false) returns its position)
  const firstInvalid = fields[results.indexOf(false)];
  if (firstInvalid) {
    formStatus.textContent = 'Please correct the highlighted fields.';
    firstInvalid.focus(); // move keyboard focus to the first problem field
    return; // stop here; don't send the form
  }

  // All fields are valid — build a mailto: link and open it
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  // encodeURIComponent makes the text safe to use inside a URL
  const subject = encodeURIComponent(`Website enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  // Opening a mailto: URL asks the OS to open the user's default email app
  window.location.href = `mailto:kim@eqit.ai?subject=${subject}&body=${body}`;
  formStatus.textContent = 'Your email app should open with your message. If it does not, email kim@eqit.ai directly.';
});
