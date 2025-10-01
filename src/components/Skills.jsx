
import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ sections, skills }) => {
  return (
    <section
      id="skills"
      ref={el => sections.current[2] = el}
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
          My <span style={{ color: '#f9a8d4' }}>Skills</span>
        </motion.h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          maxWidth: '896px',
          margin: '0 auto',
          '@media (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr'
          }
        }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '1.125rem',
                  fontWeight: '600'
                }}>{skill.name}</span>
                <span style={{ color: '#f9a8d4' }}>{skill.level}%</span>
              </div>
              <div style={{
                height: '12px',
                backgroundColor: '#1e293b',
                borderRadius: '9999px',
                overflow: 'hidden'
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #EC4899, #8B5CF6, #3B82F6)',
                    backgroundSize: '200% 200%',
                    borderRadius: '9999px',
                    animation: 'gradient 8s ease infinite'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
