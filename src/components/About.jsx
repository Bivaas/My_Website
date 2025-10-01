
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ sections }) => {
  return (
    <section
      id="about"
      ref={el => sections.current[1] = el}
      style={{ padding: '80px 0' }}
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
          About <span style={{ color: '#f9a8d4' }}>Me</span>
        </motion.h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
          '@media (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr'
          }
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #EC4899, #8B5CF6, #3B82F6)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.2
              }}></div>
              <img
                src="/quote.jpg"
                alt="Work in Progress"
                loading="lazy"
                style={{
                  position: 'relative',
                  borderRadius: '50%',
                  width: '100%',
                  height: 'auto',
                  maxWidth: '320px',
                  margin: '0 auto',
                  objectFit: 'cover',
                  border: '4px solid rgba(236, 72, 153, 0.3)',
                  display: 'block'
                }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <p style={{
              fontSize: '1.125rem',
              color: '#cbd5e1',
              lineHeight: '1.75'
            }}>
              I'm a passionate developer with a love for creating and learning to make beautiful, functional web applications.
              With expertise in modern JavaScript frameworks and a keen eye for design.
            </p>
            <blockquote style={{
              fontSize: '1.25rem',
              color: '#f9a8d4',
              fontWeight: 'bold',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              margin: '20px 0 0 0',
              padding: '18px 24px',
              background: 'rgba(236, 72, 153, 0.08)',
              borderLeft: '5px solid #EC4899',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(236, 72, 153, 0.08)'
            }}>
              "I bring ideas to life through code."
            </blockquote>
            <p style={{
              fontSize: '1.125rem',
              color: '#cbd5e1',
              lineHeight: '1.75'
            }}>
              My journey in web development started 1 year ago, and since then, I've worked on various projects
              ranging from small business websites to complex enterprise applications.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              paddingTop: '16px'
            }}>
              {[
                { label: 'Experience', value: '1 year+' },
                { label: 'Projects', value: '∞' },
                { label: 'Clients', value: '∞' },
                { label: 'Satisfaction', value: '100%' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(236, 72, 153, 0.3)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                  }}
                >
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#f9a8d4'
                  }}>{stat.value}</div>
                  <div style={{ color: '#cbd5e1' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
