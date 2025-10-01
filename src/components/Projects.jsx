
import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ sections, activeProjects, comingSoonProjects }) => {
  // Add EchoTrail project if not present
  const updatedActiveProjects = Array.isArray(activeProjects) ? [...activeProjects] : [];
  if (!updatedActiveProjects.some(p => p.title === 'Echo Trails')) {
    updatedActiveProjects.push({
      title: 'Echo Trails',
      description: 'An award winning hackathon project',
      icon: '💡',
      technologies: ['React', 'Node.Js', 'Supabase']
    });
  }
  return (
    <section
      id="projects"
      ref={el => sections.current[3] = el}
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
            marginBottom: '48px',
            background: 'linear-gradient(90deg, #EC4899, #8B5CF6, #3B82F6)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient 8s ease infinite'
          }}
        >
          Projects
        </motion.h2>

        {/* Active Projects */}
        <div className="responsive-grid-2 responsive-grid-3" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {updatedActiveProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
              style={{
                borderRadius: '16px',
                backgroundColor: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid rgba(236, 72, 153, 0.2)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                height: '100%',
                overflow: 'hidden'
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-card-bg"></div>
              <div className="project-content" style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Project Icon and Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <motion.span
                    style={{ fontSize: '1.5rem' }}
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {project.icon}
                  </motion.span>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#e2e8f0',
                    margin: 0
                  }}>{project.title}</h3>
                </div>

                {/* Project Description */}
                <p style={{
                  color: '#cbd5e1',
                  marginBottom: '16px',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  flexGrow: 1
                }}>{project.description}</p>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glow-button"
                  style={{
                    width: '100%',
                    padding: '10px 0',
                    background: 'linear-gradient(90deg, #EC4899, #8B5CF6)',
                    borderRadius: '8px',
                    fontWeight: '600',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.875rem',
                    marginTop: 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(90deg, #DB2777, #7C3AED)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(90deg, #EC4899, #8B5CF6)';
                  }}
                  onClick={() => {
                    if (project.title === 'Hamro-Doko') {
                      window.open('https://hamrodoko.netlify.app', '_blank');
                    } else if (project.title === 'NepolianMC') {
                      window.open('https://mcnepal.onrender.com/', '_blank');
                    } else if (project.title === 'Echo Trails') {
                      window.open('https://echotrail.netlify.app/map', '_blank');
                    }
                  }}
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '40px' }}
        >
          <h3 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '32px',
            color: '#f9a8d4'
          }}>
            Coming Soon
          </h3>
          <div className="responsive-grid-2 responsive-grid-4" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px'
          }}>
            {comingSoonProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="project-card"
                style={{
                  borderRadius: '16px',
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0',
                  height: '100%',
                  overflow: 'hidden'
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="project-card-bg"></div>
                <div className="project-content" style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Project Icon and Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <motion.span
                      style={{ fontSize: '1.5rem' }}
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      {project.icon}
                    </motion.span>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: 'bold',
                      color: '#e2e8f0',
                      margin: 0
                    }}>{project.title}</h3>
                  </div>

                  {/* Project Description */}
                  <p style={{
                    color: '#cbd5e1',
                    marginBottom: '16px',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    flexGrow: 1
                  }}>{project.description}</p>

                  {/* Technologies */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px'
                  }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Coming Soon Badge */}
                  <motion.div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '8px 0',
                      background: 'rgba(236, 72, 153, 0.1)',
                      borderRadius: '8px',
                      color: '#f9a8d4',
                      fontWeight: '500',
                      fontSize: '0.875rem'
                    }}
                    whileHover={{
                      scale: 1.05,
                      background: 'rgba(236, 72, 153, 0.2)'
                    }}
                  >
                    Coming Soon
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
