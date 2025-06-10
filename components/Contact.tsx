'use client';

import { useEffect } from "react";
import data from "../public/data/data.json";

const Contact = () => {
  useEffect(() => {
    const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;

    if (!contactForm) return;

    const handleSubmit = (e: Event) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name')?.toString() || '';
      const email = formData.get('email')?.toString() || '';
      const message = formData.get('message')?.toString() || '';

      if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:${data.contact.email}?subject=${subject}&body=${body}`;

        window.open(mailtoLink);

        showNotification('Thank you for your message! Your email client should open shortly.', 'success');
        contactForm.reset();

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1000);
    };

    contactForm.addEventListener('submit', handleSubmit);
    return () => contactForm.removeEventListener('submit', handleSubmit);
  }, []);

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>{data.contact.message}</p>
            <div className="contact-links">
              <a href={`mailto:${data.contact.email}`} className="contact-link">
                📧 {data.contact.email}
              </a>
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                💼 LinkedIn Profile
              </a>
            </div>
          </div>

          <form className="contact-form" id="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" rows={5} className="form-control" required></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--full-width">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// Utility Functions
function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message: string, type: 'success' | 'error' | 'info' = 'info') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
    font-size: 14px;
    line-height: 1.4;
  `;

  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}
