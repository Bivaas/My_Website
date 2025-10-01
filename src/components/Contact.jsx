
import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ sections, formData, handleInputChange, messageSent }) => {
  return (
    <section
      id="contact"
      ref={el => sections.current[4] = el}
      style={{
        padding: '80px 0',
        backgroundColor: 'rgba(30, 41, 59, 0.5)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px'
          }}
        >
          Get In <span style={{ color: '#f9a8d4' }}>Touch</span>
        </motion.h2>
        <div style={{
          maxWidth: '672px',
          margin: '0 auto'
        }}>
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            action="https://formspree.io/f/mpwjwayd"
            method="POST"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const data = new FormData(form);
              const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                  'Accept': 'application/json'
                }
              });
              if (response.ok) {
                setMessageSent(true);
                setTimeout(() => setMessageSent(false), 2500);
                form.reset();
              } else {
                alert('There was a problem submitting your form.');
              }
            }}
          >
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                marginBottom: '8px'
              }}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                placeholder="Your Name"
                onFocus={(e) => {
                  e.target.style.borderColor = '#EC4899';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                }}
              />
            </div>
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                marginBottom: '8px'
              }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                placeholder="your@email.com"
                onFocus={(e) => {
                  e.target.style.borderColor = '#EC4899';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                }}
              />
            </div>
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                marginBottom: '8px'
              }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'inherit'
                }}
                placeholder="Your message..."
                onFocus={(e) => {
                  e.target.style.borderColor = '#EC4899';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                }}
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="glow-button"
              style={{
                width: '100%',
                padding: '12px 0',
                background: 'linear-gradient(90deg, #EC4899, #8B5CF6)',
                borderRadius: '8px',
                fontWeight: '600',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 0 0 rgba(236, 72, 153, 0.25)',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 10px 25px rgba(236, 72, 153, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 0 0 0 rgba(236, 72, 153, 0.25)';
              }}
            >
              Send Message
            </motion.button>
            {messageSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  color: '#39FF14',
                  fontWeight: 'bold',
                  marginTop: '12px',
                  textAlign: 'center',
                  fontSize: '16px',
                  transition: 'opacity 0.3s, transform 0.3s'
                }}
              >
                Message sent!
              </motion.div>
            )}
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              marginTop: '48px',
              textAlign: 'center'
            }}
          >
            <p style={{
              color: '#cbd5e1',
              marginBottom: '16px'
            }}>Or connect with me on social media</p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px'
            }}>
              {[
                {
                  name: 'Email',
                  icon: <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>,
                  link: 'mailto:bivaasbaral7@gmail.com'
                },
                {
                  name: 'GitHub',
                  icon: <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.1.73-.24.73-.53v-1.84c-3.03.66-3.67-1.47-3.67-1.47-.5-1.27-1.22-1.61-1.22-1.61-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.56 1.2 3.18.92.1-.72.38-1.2.7-1.48-2.43-.28-4.98-1.22-4.98-5.42 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.91 0 0 .92-.3 3 1.12a10.4 10.4 0 015.46 0c2.08-1.42 3-1.12 3-1.12.6 1.5.22 2.63.11 2.9.7.78 1.13 1.75 1.13 2.95 0 4.2-2.55 5.14-4.98 5.42.4.35.75.98.75 1.98v2.95c0 .3.18.63.73.53A11 11 0 0012 1.27z" /></svg>,
                  link: 'https://github.com/Bivaas'
                }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  style={{
                    color: '#cbd5e1',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f9a8d4'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
