// contact.js
const emailUser = 'hvijaykumar51';
const emailDomain = 'gmail.com';
const phonePrefix = '+91';
const phoneNumber = '7349509646';

// Email link
const emailLink = document.getElementById('email-link');
if (emailLink) {
  emailLink.href = `mailto:${emailUser}@${emailDomain}`;
  emailLink.setAttribute('aria-label', 'Email Vijay');
}

// Phone link
const phoneLink = document.getElementById('phone-link');
if (phoneLink) {
  phoneLink.href = `tel:${phonePrefix}${phoneNumber}`;
}