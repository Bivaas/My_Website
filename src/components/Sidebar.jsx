
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 99,
              backdropFilter: 'blur(4px)'
            }}
          />
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '80%',
              maxWidth: '380px',
              height: '100vh',
              backgroundColor: '#0d1117', /* Darker background for coder theme */
              backdropFilter: 'blur(10px)',
              zIndex: 100,
              borderRight: '1px solid #30363d', /* Subtle border */
              fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 0 20px rgba(0, 255, 136, 0.1)' /* Subtle green glow */
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px 24px 0 24px',
              marginBottom: '24px',
              borderBottom: '1px solid #30363d',
              paddingBottom: '16px'
            }}>
              <h2 style={{
                fontSize: '22px',
                fontWeight: 'bold',
                color: '#58a6ff', /* GitHub blue */
                fontFamily: 'monospace',
                textShadow: '0 0 10px rgba(88, 166, 255, 0.3)'
              }}>
                &lt;<span style={{ color: '#ff79c6' }}>developer</span>-<span style={{ color: '#8be9fd' }}>info</span> /&gt;
              </h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#8b949e',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(88, 166, 255, 0.1)';
                  e.target.style.color = '#58a6ff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#8b949e';
                }}
              >
                <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Scrollable Content */}
            <div
              className="sidebar-scroll"
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '0 24px',
                marginBottom: '20px'
              }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
                fontSize: '13px',
                lineHeight: '1.6',
                letterSpacing: '0.2px'
              }}>
                {/* Developer Info */}
                <div style={{
                  backgroundColor: '#161b22', /* Darker card background */
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                  color: '#c9d1d9', /* Lighter text for dark background */
                  boxShadow: '0 0 20px rgba(0, 255, 136, 0.1)',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  maxWidth: '100%'
                }}>
                  {/* Developer Object */}
                  <div style={{ color: '#ff79c6', fontSize: '13px', marginBottom: '12px' }}>
                    <span className="code-keyword">const</span> <span style={{ color: '#8be9fd' }}>developer</span> = {'{'}
                  </div>
                  <div style={{ marginLeft: '12px', marginBottom: '16px' }}>
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">name</span><span className="code-punctuation">:</span> <span className="code-string">"Bivaas Baral"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">role</span><span className="code-punctuation">:</span> <span className="code-string">"Full Stack Developer"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">location</span><span className="code-punctuation">:</span> <span className="code-string">"Nepal 🇳🇵"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">experience</span><span className="code-punctuation">:</span> <span className="code-string">"1+ years"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <span className="code-property">status</span><span className="code-punctuation">:</span> <span className="code-string">"available"</span><span className="code-punctuation">,</span>
                    </div>

                    {/* Hobbies Section */}
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">hobbies</span><span className="code-punctuation">: {'{'}</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">primary</span><span className="code-punctuation">:</span> <span className="code-string">"Coding"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">secondary</span><span className="code-punctuation">:</span> <span className="code-string">"Gaming"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">creative</span><span className="code-punctuation">:</span> <span className="code-string">"Photography"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '12px' }}>
                      <span className="code-property">learning</span><span className="code-punctuation">:</span> <span className="code-string">"Tech"</span>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <span className="code-punctuation">{'}'},</span>
                    </div>

                    {/* Interests Section */}
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">interests</span><span className="code-punctuation">: {'{'}</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">professional</span><span className="code-punctuation">:</span> <span className="code-string">"Web Development"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">entertainment</span><span className="code-punctuation">:</span> <span className="code-string">"Cinematics"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">creative</span><span className="code-punctuation">:</span> <span className="code-string">"Video editing"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '12px' }}>
                      <span className="code-property">technical</span><span className="code-punctuation">:</span> <span className="code-string">"Cybersecurity"</span>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <span className="code-punctuation">{'}'},</span>
                    </div>

                    {/* Education Section */}
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">education</span><span className="code-punctuation">: {'{'}</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">degree</span><span className="code-punctuation">:</span> <span className="code-string">"UndergraD"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">institution</span><span className="code-punctuation">:</span> <span className="code-string">"NA"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '12px' }}>
                      <span className="code-property">year</span><span className="code-punctuation">:</span> <span className="code-string">"2026"</span>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <span className="code-punctuation">{'}'},</span>
                    </div>

                    {/* Languages Section */}
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">languages</span><span className="code-punctuation">: {'{'}</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">english</span><span className="code-punctuation">:</span> <span className="code-string">"Fluent"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '12px' }}>
                      <span className="code-property">nepali</span><span className="code-punctuation">:</span> <span className="code-string">"Native"</span>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <span className="code-punctuation">{'}'},</span>
                    </div>

                    {/* Achievements Section */}
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">achievements</span><span className="code-punctuation">: {'{'}</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">hackathon</span><span className="code-punctuation">:</span> <span className="code-string">"Active participant"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">opensource</span><span className="code-punctuation">:</span> <span className="code-string">"Active contributor"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '12px' }}>
                      <span className="code-property">projects</span><span className="code-punctuation">:</span> <span className="code-string">"Built multiple projects"</span>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <span className="code-punctuation">{'}'},</span>
                    </div>

                    {/* Skills Section */}
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">skills</span><span className="code-punctuation">: {'{'}</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">frontend</span><span className="code-punctuation">:</span> <span className="code-string">"React, HTML/CSS"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">backend</span><span className="code-punctuation">:</span> <span className="code-string">"Node.js, Python"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '12px' }}>
                      <span className="code-property">database</span><span className="code-punctuation">:</span> <span className="code-string">"MongoDB, firebase"</span>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <span className="code-punctuation">{'}'},</span>
                    </div>

                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-property">contact</span><span className="code-punctuation">: {'{'}</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '4px' }}>
                      <span className="code-property">email</span><span className="code-punctuation">:</span> <span className="code-string">"bivaasbaral7@gmail.com"</span><span className="code-punctuation">,</span>
                    </div>
                    <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                      <span className="code-property">github</span><span className="code-punctuation">:</span> <span className="code-string">"Bivaas"</span>
                    </div>
                    <div style={{ marginBottom: '6px' }}>
                      <span className="code-punctuation">{'}'}</span>
                    </div>
                  </div>
                  <div style={{ color: '#ff79c6' }}>
                    {'}'};
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
