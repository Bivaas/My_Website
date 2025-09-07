import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [quotes, setQuotes] = useState([]);
  const [quotesLoaded, setQuotesLoaded] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const sections = useRef([]);
  
  // Roles for the animation
  const roles = ['student','Full Stack Developer', 'UI/UX Designer', 'Problem Solver', ];
  
  // Sample quotes for the status section - can be updated from backend later
  const allQuotes = [
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci"
    },
    {
  text: "Great code doesn’t just work—it whispers clarity.",
  author: "Bivaas"
},
{
  text: "Complexity is easy. Simplicity takes genius.",
  author: "Bivaas"
},
{
  text: "A good developer solves problems. A great one prevents them.",
  author: "Bivaas"
},
{
  text: "Every line of code is a decision—make it count.",
  author: "Bivaas"
},
{
  text: "Design is not just how it looks, but how it feels to use.",
  author: "Inspired by Steve Jobs"
},
{
  text: "Don't add features—solve problems.",
  author: "Bivaas"
},
{
  text: "The best products come from obsession, not obligation.",
  author: "Bivaas"
},
{
  text: "Refactor not because it’s broken, but because it can be better.",
  author: "Bivaas"
},
{
  text: "Programs must be written for people to read, and only incidentally for machines to execute.",
  author: "Harold Abelson"
},
{
  text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  author: "Martin Fowler"
},
{
  text: "First, solve the problem. Then, write the code.",
  author: "John Johnson"
},
{
  text: "Make it work, make it right, make it fast.",
  author: "Kent Beck"
},
{
  text: "The function of good software is to make the complex appear to be simple.",
  author: "Grady Booch"
},
{
  text: "Simplicity is prerequisite for reliability.",
  author: "Edsger W. Dijkstra"
},
{
  text: "Talk is cheap. Show me the code.",
  author: "Linus Torvalds"
},
{
  text: "Good design is obvious. Great design is transparent.",
  author: "Joe Sparano"
},
{
  text: "Innovation is saying no to a thousand things.",
  author: "Steve Jobs"
},
{
  text: "If you can't explain it simply, you don't understand it well enough.",
  author: "Albert Einstein"
}


  ];
  
  // Lazy load quotes
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setQuotes(allQuotes);
      setQuotesLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Auto-rotate quotes
  useEffect(() => {
    if (quotes.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000); // Change quote every 8 seconds
    
    return () => clearInterval(interval);
  }, [quotes]);
  
  // Auto-rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    
    return () => clearInterval(interval);
  }, [roles.length]);
  
  // IntersectionObserver for active section detection
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3, rootMargin: '-100px' });
    
    const currentSections = sections.current.filter(Boolean);
    currentSections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      currentSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const skills = [
    { name: 'HTML/CSS', level: 94 },
    { name: 'JavaScript', level: 87 },
    { name: 'Python', level: 86 },
    { name: 'React', level: 77 },
    { name: 'Node.js', level: 73 },
    { name: 'MongoDB', level: 75 }
  ];
  
  // Split projects into active and coming soon
  const activeProjects = [
    {
      title: 'Hamro-Doko',
      description: 'Local guide in biratnagar',
      icon: '💼',
      technologies: ['React', 'Express', 'Firebase']
    },
    {
      title: 'Ishu Traders',
      description: 'A local Business',
      icon: '💸',
      technologies: ['React', 'Redux', 'Firebase']
    },
    {
      title: 'NepolianMC',
      description: 'A minecraft server',
      icon: '⛏️',
      technologies: ['Node.js', 'Redis', 'firebase']
    }
  ];
  
  const comingSoonProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online shopping experience',
      icon: '🛒',
      technologies: ['React', 'Node.js', 'Docker']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool',
      icon: '📋',
      technologies: ['React', 'Firebase', 'Material-UI']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization and reporting',
      icon: '📊',
      technologies: ['React', 'API', 'Chart.js']
    },
    {
      title: 'Real-time Chat App',
      description: 'Instant messaging with video calls',
      icon: '💬',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
   
  ];
  
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(236, 72, 153, 0.5); }
          50% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.8), 0 0 30px rgba(236, 72, 153, 0.4); }
          100% { box-shadow: 0 0 5px rgba(236, 72, 153, 0.5); }
        }
        @media (min-width: 640px) {
          .responsive-flex-row { flex-direction: row !important; }
        }
        @media (min-width: 768px) {
          .responsive-grid-2 { grid-template-columns: 1fr 1fr !important; }
          .responsive-flex { display: flex !important; }
          .responsive-hidden { display: none !important; }
          .responsive-text-lg { font-size: 1.5rem !important; }
          .responsive-text-xl { font-size: 4.5rem !important; }
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .responsive-grid-3 { grid-template-columns: 1fr 1fr 1fr !important; }
          .responsive-grid-4 { grid-template-columns: repeat(4, 1fr) !important; }
          .footer-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        /* Custom scrollbar styling */
        .sidebar-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar-scroll::-webkit-scrollbar-track {
          background: rgba(44, 44, 44, 0.3);
          border-radius: 3px;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb {
          background: rgba(236, 72, 153, 0.3);
          border-radius: 3px;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(236, 72, 153, 0.5);
        }
        /* For Firefox */
        .sidebar-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(236, 72, 153, 0.3) rgba(44, 44, 44, 0.3);
        }
        /* Quote card styling */
        .quote-card-wrapper {
          position: relative;
          background: linear-gradient(45deg, #EC4899, #8B5CF6, #3B82F6);
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
          border-radius: 0.75rem;
          padding: 2px;
          margin: 4rem auto 3rem;
          max-width: 42rem;
        }
        .quote-card {
          background-color: rgba(17, 24, 39, 0.9);
          border-radius: 0.75rem;
          padding: 1.5rem;
          position: relative;
          text-align: center;
        }
        .quote-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #f9a8d4;
          text-transform: uppercase;
          letter-spacing: 0.025em;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .quote-mark {
          position: absolute;
          font-size: 4rem;
          color: rgba(249, 168, 212, 0.2);
          font-family: Georgia, serif;
          line-height: 1;
        }
        .quote-mark-left {
          top: 1rem;
          left: 1rem;
        }
        .quote-mark-right {
          bottom: 1rem;
          right: 1rem;
        }
        .quote-text {
          font-size: 1.8rem;
          font-style: italic;
          text-align: center;
          margin: 0 2rem;
          color: #f3f4f6;
          line-height: 1.5;
        }
        .quote-author {
          font-size: 1.2rem;
          text-align: right;
          color: #f9a8d4;
          margin-top: 1.5rem;
          font-weight: 500;
        }
        .quote-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 1.5rem;
        }
        .quote-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(249, 168, 212, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .quote-indicator.active {
          background-color: #f9a8d4;
          transform: scale(1.2);
        }
        .quote-loading {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f3f4f6;
        }
        @media (max-width: 768px) {
          .quote-text {
            font-size: 1.4rem;
            margin: 0 1rem;
          }
          .quote-author {
            font-size: 1rem;
          }
          .quote-mark {
            font-size: 3rem;
          }
          .quote-card {
            padding: 1.5rem;
          }
          .quote-card-wrapper {
            margin: 3rem auto 2rem;
          }
        }
        /* Tech badge styling */
        .tech-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.75rem;
          background-color: rgba(236, 72, 153, 0.15);
          color: #fbcfe8;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .tech-badge:hover {
          background-color: rgba(236, 72, 153, 0.25);
          transform: translateY(-2px);
        }
        /* Project card hover effect */
        .project-card {
          transition: all 0.3s ease;
          overflow: hidden;
          position: relative;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #EC4899, #8B5CF6, #3B82F6);
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .project-card:hover::before {
          transform: scaleX(1);
        }
        /* Animated background for project cards */
        .project-card-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        .project-card:hover .project-card-bg {
          opacity: 1;
        }
        .project-content {
          position: relative;
          z-index: 1;
        }
        /* Glowing effect for active project buttons */
        .glow-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .glow-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        .glow-button:hover::before {
          left: 100%;
        }
        /* Role animation styling */
        .role-container {
          position: relative;
          display: inline-block;
          min-width: 250px;
          height: 1.5em;
          vertical-align: middle;
        }
        .role-text {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          font-weight: 600;
          background: linear-gradient(90deg, #EC4899, #8B5CF6, #3B82F6);
          background-size: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradient 8s ease infinite';
        }
        .role-indicators {
          display: flex;
          justify-content: flex-start;
          gap: 6px;
          margin-top: 8px;
        }
        .role-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: rgba(236, 72, 153, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .role-indicator.active {
          background-color: #EC4899;
          transform: scale(1.2);
        }
      `}</style>
      <div style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0f172a',
        color: '#e2e8f0',
        margin: 0,
        padding: 0,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif'"
      }}>
        {/* Navigation */}
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
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
        
        {/* Sliding Sidebar */}
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
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  backdropFilter: 'blur(10px)',
                  zIndex: 100,
                  borderRight: '1px solid rgba(236, 72, 153, 0.3)',
                  fontFamily: 'monospace',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '24px 24px 0 24px',
                  marginBottom: '24px'
                }}>
                  <h2 style={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: '#f9a8d4',
                    fontFamily: 'monospace',
                    textShadow: '0 0 10px rgba(236, 72, 153, 0.3)'
                  }}>
                    &lt;<span style={{ color: '#c084fc' }}>developer</span>-<span style={{ color: '#93c5fd' }}>info</span> /&gt;
                  </h2>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#e2e8f0',
                      cursor: 'pointer',
                      padding: '4px',
                      borderRadius: '4px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(236, 72, 153, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
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
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      padding: '24px',
                      borderRadius: '12px',
                      border: '1px solid #EC4899',
                      color: '#f9a8d4',
                      boxShadow: '0 0 20px rgba(236, 72, 153, 0.2)',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      maxWidth: '100%'
                    }}>
                      {/* Developer Object */}
                      <div style={{ color: '#f9a8d4', fontSize: '13px', marginBottom: '12px' }}>
                        <span style={{ color: '#f9a8d4' }}>const</span> <span style={{ color: '#f9a8d4' }}>developer</span> = {'{'}
                      </div>
                      <div style={{ marginLeft: '12px', marginBottom: '16px' }}>
                        <div style={{ marginBottom: '6px' }}>
                          <span style={{ color: '#f9a8d4' }}>name</span><span style={{ color: '#f9a8d4' }}>:</span> <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"Bivaas Baral"</span><span style={{ color: '#f9a8d4' }}>,</span>
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                          <span style={{ color: '#f9a8d4' }}>role</span><span style={{ color: '#f9a8d4' }}>:</span> <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"Full Stack Developer"</span><span style={{ color: '#f9a8d4' }}>,</span>
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                          <span style={{ color: '#f9a8d4' }}>location</span><span style={{ color: '#f9a8d4' }}>:</span> <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"Nepal 🇳🇵"</span><span style={{ color: '#f9a8d4' }}>,</span>
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                          <span style={{ color: '#f9a8d4' }}>experience</span><span style={{ color: '#f9a8d4' }}>:</span> <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"1+ years"</span><span style={{ color: '#f9a8d4' }}>,</span>
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                          <span style={{ color: '#f9a8d4' }}>status</span><span style={{ color: '#f9a8d4' }}>:</span> <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"available"</span><span style={{ color: '#f9a8d4' }}>,</span>
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                          <span style={{ color: '#f9a8d4' }}>skills</span><span style={{ color: '#f9a8d4' }}>: [</span>
                        </div>
                        <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                          <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"React"</span><span style={{ color: '#f9a8d4' }}>, </span>
                          <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"JavaScript"</span><span style={{ color: '#f9a8d4' }}>, </span>
                          <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"Python"</span><span style={{ color: '#f9a8d4' }}>,</span>
                        </div>
                        <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                          <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"Node.js"</span><span style={{ color: '#f9a8d4' }}>, </span>
                          <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"MongoDB"</span><span style={{ color: '#f9a8d4' }}>, </span>
                          <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"HTML/CSS"</span>
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                          <span style={{ color: '#f9a8d4' }}>],</span>
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                          <span style={{ color: '#f9a8d4' }}>contact</span><span style={{ color: '#f9a8d4' }}>: {'{'}</span>
                        </div>
                        <div style={{ marginLeft: '12px', marginBottom: '4px' }}>
                          <span style={{ color: '#f9a8d4' }}>email</span><span style={{ color: '#f9a8d4' }}>:</span> <span style={{
                            color: '#fbcfe8',
                            fontWeight: 'bold',
                            textShadow: '0 0 8px #fbcfe8',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word'
                          }}>"bivaasbaral7@gmail.com"</span><span style={{ color: '#f9a8d4' }}>,</span>
                        </div>
                        <div style={{ marginLeft: '12px', marginBottom: '6px' }}>
                          <span style={{ color: '#f9a8d4' }}>github</span><span style={{ color: '#f9a8d4' }}>:</span> <span style={{ color: '#fbcfe8', fontWeight: 'bold', textShadow: '0 0 8px #fbcfe8' }}>"Bivaas"</span>
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                          <span style={{ color: '#f9a8d4' }}>{'}'}</span>
                        </div>
                      </div>
                      <div style={{ color: '#f9a8d4' }}>
                        {'}'};
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        
        <main>
          {/* Hero Section */}
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
                <motion.h1
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
                  <span style={{
                    background: 'linear-gradient(90deg, #EC4899, #8B5CF6, #3B82F6)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient 8s ease infinite'
                  }}>
                    Bivaas Baral
                  </span>
                </motion.h1>
                
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
                      <span>Daily Quote</span>
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
                    <div className="quote-indicators">
                      {quotes.map((_, index) => (
                        <div
                          key={index}
                          className={`quote-indicator ${index === currentQuoteIndex ? 'active' : ''}`}
                          onClick={() => setCurrentQuoteIndex(index)}
                        />
                      ))}
                    </div>
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
          
          {/* About Section */}
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
          
          {/* Skills Section */}
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
          
          {/* Projects Section */}
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
                {activeProjects.map((project, index) => (
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
          
          {/* Contact Section */}
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
                        url: 'https://mail.google.com/mail/?view=cm&fs=1&to=bivaasbaral7@gmail.com',
                        icon: (
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        )
                      },
                      {
                        name: 'GitHub',
                        url: 'https://github.com/Bivaas',
                        icon: (
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )
                      },
                      {
                        name: 'Twitter',
                        url: 'https://x.com/elonmusk',
                        icon: (
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        )
                      },
                      {
                        name: 'Discord',
                        url: 'https://discord.com/users/910140104977285171',
                        icon: (
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292.077.077.006.127-.006.127a12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                          </svg>
                        )
                      }
                    ].map((platform) => (
                      <motion.a
                        key={platform.name}
                        href={platform.url}
                        target={platform.name === 'Email' ? '_blank' : (['Discord', 'GitHub', 'Twitter'].includes(platform.name) ? '_blank' : '_self')}
                        rel={platform.name === 'Email' ? 'noopener noreferrer' : (['Discord', 'GitHub', 'Twitter'].includes(platform.name) ? 'noopener noreferrer' : '')}
                        whileHover={{ scale: 1.15, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          color: '#cbd5e1',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#f9a8d4';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#cbd5e1';
                        }}
                      >
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: 'rgba(30, 41, 59, 0.8)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(236, 72, 153, 0.2)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.5)';
                          e.currentTarget.style.backgroundColor = 'rgba(236, 72, 153, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.2)';
                          e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                        }}
                        >
                          {typeof platform.icon === 'string' ? (
                            <span style={{
                              fontSize: '0.875rem',
                              fontWeight: '600'
                            }}>{platform.icon}</span>
                          ) : (
                            platform.icon
                          )}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Enhanced Footer */}
        <footer style={{
          backgroundColor: '#0f172a',
          borderTop: '1px solid rgba(236, 72, 153, 0.2)',
          padding: '48px 0 24px',
          color: '#e2e8f0'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <div className="footer-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '32px',
              marginBottom: '40px'
            }}>
              {/* About Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#f9a8d4',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Me
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: '#cbd5e1' }}>
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I create beautiful, functional applications that solve real-world problems.
                </p>
              </div>
              
              {/* Quick Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#f9a8d4',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  Quick Links
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#cbd5e1',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          textAlign: 'left',
                          padding: '4px 0',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#f9a8d4';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#cbd5e1';
                        }}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Social Media */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#f9a8d4',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Connect With Me
                </h3>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {[
                    {
                      name: 'Facebook',
                      url: 'https://www.facebook.com/Bivaas.B',
                      icon: (
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      )
                    },
                    {
                      name: 'Instagram',
                      url: 'https://www.instagram.com/_bivaas_/',
                      icon: (
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.059-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                        </svg>
                      )
                    }
                  ].map((platform) => (
                    <motion.a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        color: '#cbd5e1',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(30, 41, 59, 0.8)',
                        border: '1px solid rgba(236, 72, 153, 0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#f9a8d4';
                        e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.5)';
                        e.currentTarget.style.backgroundColor = 'rgba(236, 72, 153, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#cbd5e1';
                        e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.2)';
                        e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                      }}
                    >
                      {platform.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#f9a8d4',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Info
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg style={{ width: '16px', height: '16px', color: '#f9a8d4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bivaasbaral7@gmail.com" style={{
                      color: '#cbd5e1',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#f9a8d4';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#cbd5e1';
                    }}>
                      bivaasbaral7@gmail.com
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg style={{ width: '16px', height: '16px', color: '#f9a8d4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>Nepal 🇳🇵</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div style={{
              borderTop: '1px solid rgba(236, 72, 153, 0.2)',
              paddingTop: '24px',
              textAlign: 'center'
            }}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: '#cbd5e1', fontSize: '0.875rem' }}
              >
                © {new Date().getFullYear()} Bivaas Baral. All rights reserved.
              </motion.p>
            </div>
          </div>
        </footer>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Portfolio;