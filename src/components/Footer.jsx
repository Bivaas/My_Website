
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      borderTop: '1px solid rgba(236, 72, 153, 0.2)',
      padding: '48px 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#cbd5e1', marginBottom: '16px' }}>
          &copy; {new Date().getFullYear()} Bivaas Baral. All rights reserved.
        </p>
        <p style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>
          Made with <span style={{ color: '#EC4899' }}>❤</span> and a lot of coffee.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
