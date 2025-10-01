
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = ({ sections, scrollToSection, currentRoleIndex, roles, quotesLoaded, currentQuoteIndex, quotes }) => {
  return (
    <section
      id="home"
      ref={el => sections.current[0] = el}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '288px',
          height: '288px',
          backgroundColor: '#EC4899',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(40px)',
          opacity: 0.15,
          animation: 'pulse 2s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '75%',
          right: '25%',
          width: '288px',
          height: '288px',
          backgroundColor: '#8B5CF6',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(40px)',
          opacity: 0.15,
          animation: 'pulse 2s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '288px',
          height: '288px',
          backgroundColor: '#3B82F6',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(40px)',
          opacity: 0.15,
          animation: 'pulse 2s infinite'
        }}></div>
      </div>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        zIndex: 10
      }}>
        <div style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '24px',
              '@media (min-width: 768px)': {
                fontSize: '4.5rem'
              }
            }}
          >
            Hi, I'm{' '}
            <h1 style={{
              display: 'inline-block',
              margin: 0,
              padding: 0,
              background: 'linear-gradient(90deg, #EC4899, #8B5CF6, #3B82F6)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient 8s ease infinite',
              fontSize: 'inherit',
              fontWeight: 'inherit'
            }}>
              Bivaas Baral
            </h1>
          </motion.div>

          {/* New slide/fade-in animation for roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.25rem',
              color: '#cbd5e1',
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '@media (min-width: 768px)': {
                fontSize: '1.5rem'
              }
            }}
          >
            <span style={{ marginRight: '8px' }}>I'm a</span>
            <div className="role-container">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="role-text"
                  style={{
                    display: 'inline-block',
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, #EC4899, #8B5CF6, #3B82F6)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient 8s ease infinite'
                  }}
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Interactive Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="quote-card-wrapper"
          >
            <div className="quote-card">
              <div className="quote-label">
                <span>📜</span>
                <span>Quotes</span>
              </div>
              <div className="quote-mark quote-mark-left">"</div>
              <AnimatePresence mode="wait">
                {quotesLoaded ? (
                  <motion.div
                    key={currentQuoteIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="quote-text">
                      {quotes[currentQuoteIndex]?.text}
                    </div>
                    <div className="quote-author">
                      — {quotes[currentQuoteIndex]?.author}
                    </div>
                  </motion.div>
                ) : (
                  <div className="quote-loading">
                    Loading quote...
                  </div>
                )}
              </AnimatePresence>
              <div className="quote-mark quote-mark-right">"</div>
              {/* Removed quote indicators here */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="responsive-flex-row"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              justifyContent: 'center',
              marginTop: '4rem'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="glow-button"
              style={{
                padding: '12px 32px',
                background: 'linear-gradient(90deg, #EC4899, #8B5CF6)',
                borderRadius: '9999px',
                fontWeight: '600',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 0 0 rgba(236, 72, 153, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 10px 25px rgba(236, 72, 153, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 0 0 0 rgba(236, 72, 153, 0.25)';
              }}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              style={{
                padding: '12px 32px',
                border: '2px solid #EC4899',
                borderRadius: '9999px',
                fontWeight: '600',
                backgroundColor: 'transparent',
                color: '#e2e8f0',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(236, 72, 153, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <svg style={{ width: '24px', height: '24px', color: '#f9a8d4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Home;
