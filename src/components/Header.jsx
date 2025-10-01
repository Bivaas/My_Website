
import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen, setIsSidebarOpen }) => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(8px)',
      zIndex: 50,
      borderBottom: '1px solid rgba(236, 72, 153, 0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 0',
          justifyContent: 'space-between'
        }}>
          {/* Left side - View Code and Bivaas Baral grouped together */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSidebarOpen(true)}
              style={{
                padding: '6px 10px',
                backgroundColor: 'rgba(236, 72, 153, 0.15)',
                borderRadius: '6px',
                fontWeight: '500',
                border: '1px solid rgba(236, 72, 153, 0.25)',
                color: '#f9a8d4',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(236, 72, 153, 0.25)';
                e.target.style.borderColor = 'rgba(236, 72, 153, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(236, 72, 153, 0.15)';
                e.target.style.borderColor = 'rgba(236, 72, 153, 0.25)';
              }}
            >
              <svg style={{ width: '11px', height: '11px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </motion.button>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                fontSize: '22px',
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #EC4899, #8B5CF6, #3B82F6)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                cursor: 'pointer',
                padding: '2px 0',
                animation: 'gradient 8s ease infinite'
              }}
              onClick={() => scrollToSection('home')}
            >
              Bivaas Baral
            </motion.div>
          </div>
          {/* Right side - Desktop Navigation */}
          <div className="responsive-flex" style={{
            display: 'none',
            gap: '24px'
          }}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  position: 'relative',
                  padding: '6px 10px',
                  transition: 'all 0.3s ease',
                  color: activeSection === item ? '#f9a8d4' : '#e2e8f0',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item) {
                    e.target.style.color = '#c084fc';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item) {
                    e.target.style.color = '#e2e8f0';
                  }
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <motion.div
                    layoutId="activeSection"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#EC4899'
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="responsive-hidden"
            style={{
              display: 'block',
              color: '#e2e8f0',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(236, 72, 153, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'block',
              marginTop: '16px',
              paddingBottom: '16px',
              '@media (min-width: 768px)': {
                display: 'none'
              }
            }}
          >
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  backgroundColor: activeSection === item ? 'rgba(236, 72, 153, 0.2)' : 'transparent',
                  color: activeSection === item ? '#f9a8d4' : '#e2e8f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  marginBottom: '4px'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item) {
                    e.target.style.backgroundColor = 'rgba(236, 72, 153, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;
