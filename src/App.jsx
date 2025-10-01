
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// Helper function to shuffle array
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const App = () => {
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
  const roles = ['student', 'Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];

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
      text: "Great code doesn't just work—it whispers clarity.",
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
      text: "Refactor not because it's broken, but because it can be better.",
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
      // Shuffle the quotes before setting them
      setQuotes(shuffleArray(allQuotes));
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
          width: 8px;
        }
        .sidebar-scroll::-webkit-scrollbar-track {
          background: rgba(20, 25, 40, 0.5);
          border-radius: 4px;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00ff88, #00ccff);
          border-radius: 4px;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00ffaa, #00ddff);
        }
        /* For Firefox */
        .sidebar-scroll {
          scrollbar-width: thin;
          scrollbar-color: linear-gradient(180deg, #00ff88, #00ccff) rgba(20, 25, 40, 0.5);
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
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradient 8s ease infinite'
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
        /* Syntax highlighting colors for code sidebar */
        .code-keyword { color: #ff79c6; } /* Pink for keywords */
        .code-string { color: #f1fa8c; } /* Yellow for strings */
        .code-number { color: #bd93f9; } /* Purple for numbers */
        .code-boolean { color: #ff79c6; } /* Pink for booleans */
        .code-comment { color: #6272a4; font-style: italic; } /* Gray for comments */
        .code-property { color: #50fa7b; } /* Green for property names */
        .code-punctuation { color: #f8f8f2; } /* White for punctuation */
        .code-function { color: #8be9fd; } /* Cyan for functions */
        .code-operator { color: #ff79c6; } /* Pink for operators */
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
        <Toaster />
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <main>
          <Home
            sections={sections}
            scrollToSection={scrollToSection}
            currentRoleIndex={currentRoleIndex}
            roles={roles}
            quotesLoaded={quotesLoaded}
            currentQuoteIndex={currentQuoteIndex}
            quotes={quotes}
          />
          <About sections={sections} />
          <Skills sections={sections} skills={skills} />
          <Projects sections={sections} activeProjects={activeProjects} comingSoonProjects={comingSoonProjects} />
          <Contact sections={sections} formData={formData} handleInputChange={handleInputChange} messageSent={messageSent} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
