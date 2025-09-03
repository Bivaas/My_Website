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
const sections = useRef([]);

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
// Remove old handleSubmit, replace with inline handler in form
const skills = [
{ name: 'HTML/CSS', level: 94 },
{ name: 'JavaScript', level: 87 },
{ name: 'Python', level: 86 },
{ name: 'React', level: 77 },
{ name: 'Node.js', level: 73 },
{ name: 'MongoDB', level: 75 }
];
// 更新后的项目数据，添加了图标和更简洁的描述
const projects = [
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
title: 'NOTHING HERE YET',
description: 'Just a placeholder',
icon: '🔜',
technologies: ['Node.js', 'Redis', 'MongoDB']
},
{
title: 'NOTHING HERE YET',
description: 'Just a placeholder',
icon: '🔜',
technologies: ['React', 'Node.js', 'Docker']
},
{
title: 'NOTHING HERE YET',
description: 'Just a placeholder',
icon: '🔜',
technologies: ['React', 'Firebase', 'Material-UI']
},
{
title: 'NOTHING HERE YET',
description: 'Just a placeholder',
icon: '🔜',
technologies: ['React', 'API', 'Chart.js']
},
{
title: 'NOTHING HERE YET',
description: 'Just a placeholder',
icon: '🔜',
technologies: ['React', 'Node.js', 'MongoDB']
},
{
title: 'NOTHING HERE YET',
description: 'Just a placeholder',
icon: '🔜',
technologies: ['React', 'Socket.io', 'Express']
},

];
return (
<>
<style>{`
@keyframes pulse {
0%, 100% { opacity: 1; }
50% { opacity: 0.5; }
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
}
@media (min-width: 1024px) {
.responsive-grid-3 { grid-template-columns: 1fr 1fr 1fr !important; }
.responsive-grid-4 { grid-template-columns: repeat(4, 1fr) !important; }
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
background: rgba(168, 218, 220, 0.3);
border-radius: 3px;
}
.sidebar-scroll::-webkit-scrollbar-thumb:hover {
background: rgba(168, 218, 220, 0.5);
}
/* For Firefox */
.sidebar-scroll {
scrollbar-width: thin;
scrollbar-color: rgba(168, 218, 220, 0.3) rgba(44, 44, 44, 0.3);
}
`}</style>
<div style={{
minHeight: '100vh',
width: '100%',
backgroundColor: '#2C2C2C',
color: '#E4E4E4',
margin: 0,
padding: 0
}}>
{/* Navigation */}
<nav style={{
position: 'fixed',
top: 0,
width: '100%',
backgroundColor: 'rgba(44, 44, 44, 0.95)',
backdropFilter: 'blur(8px)',
zIndex: 50,
borderBottom: '1px solid rgba(168, 218, 220, 0.3)'
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
backgroundColor: 'rgba(168, 218, 220, 0.15)',
borderRadius: '6px',
fontWeight: '500',
border: '1px solid rgba(168, 218, 220, 0.25)',
color: '#A8DADC',
cursor: 'pointer',
transition: 'all 0.3s ease',
fontSize: '11px',
display: 'flex',
alignItems: 'center',
gap: '4px'
}}
onMouseEnter={(e) => {
e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.25)';
e.target.style.borderColor = 'rgba(168, 218, 220, 0.4)';
}}
onMouseLeave={(e) => {
e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.15)';
e.target.style.borderColor = 'rgba(168, 218, 220, 0.25)';
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
background: 'linear-gradient(to right, #A8DADC, #FFC1CC)',
WebkitBackgroundClip: 'text',
WebkitTextFillColor: 'transparent',
backgroundClip: 'text',
cursor: 'pointer',
padding: '2px 0'
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
color: activeSection === item ? '#A8DADC' : '#E4E4E4',
backgroundColor: 'transparent',
border: 'none',
cursor: 'pointer',
fontSize: '15px',
fontWeight: '500'
}}
onMouseEnter={(e) => {
if (activeSection !== item) {
e.target.style.color = '#FFC1CC';
}
}}
onMouseLeave={(e) => {
if (activeSection !== item) {
e.target.style.color = '#E4E4E4';
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
backgroundColor: '#A8DADC'
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
color: '#E4E4E4',
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
e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.1)';
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
backgroundColor: activeSection === item ? 'rgba(168, 218, 220, 0.2)' : 'transparent',
color: activeSection === item ? '#A8DADC' : '#E4E4E4',
border: 'none',
cursor: 'pointer',
fontSize: '16px',
marginBottom: '4px'
}}
onMouseEnter={(e) => {
if (activeSection !== item) {
e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.1)';
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
{/* Sliding Sidebar - Fixed structure */}
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

{/* Sidebar - Fixed animation */}
<motion.div
initial={{ x: '-100%' }}
animate={{ x: 0 }}
exit={{ x: '-100%' }}
transition={{ type: 'spring', damping: 25, stiffness: 200 }}
style={{
position: 'fixed',
top: 0,
left: 0,
width: '380px',
height: '100vh',
backgroundColor: 'rgba(44, 44, 44, 0.95)',
backdropFilter: 'blur(10px)',
zIndex: 100,
borderRight: '1px solid rgba(168, 218, 220, 0.3)',
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
color: '#A8DADC',
fontFamily: 'monospace',
textShadow: '0 0 10px rgba(168, 218, 220, 0.3)'
}}>
&lt;<span style={{ color: '#FFD700' }}>developer</span>-<span style={{ color: '#FFC1CC' }}>info</span> /&gt;
</h2>
<button
onClick={() => setIsSidebarOpen(false)}
style={{
backgroundColor: 'transparent',
border: 'none',
color: '#E4E4E4',
cursor: 'pointer',
padding: '4px',
borderRadius: '4px',
transition: 'all 0.3s ease'
}}
onMouseEnter={(e) => {
e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.2)';
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
border: '1px solid #00FF41',
color: '#00FF41',
boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
wordWrap: 'break-word',
overflowWrap: 'break-word',
maxWidth: '100%'
}}>
{/* Developer Object */}
<div style={{ color: '#00FF41', fontSize: '13px', marginBottom: '12px' }}>
<span style={{ color: '#00FF41' }}>const</span> <span style={{ color: '#00FF41' }}>developer</span> = {'{'}
</div>
<div style={{ marginLeft: '12px', marginBottom: '16px' }}>
<div style={{ marginBottom: '6px' }}>
<span style={{ color: '#00FF41' }}>name</span><span style={{ color: '#00FF41' }}>:</span> <span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"Bivaas Baral"</span><span style={{ color: '#00FF41' }}>,</span>
</div>
<div style={{ marginBottom: '6px' }}>
<span style={{ color: '#00FF41' }}>role</span><span style={{ color: '#00FF41' }}>:</span> <span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"Full Stack Developer"</span><span style={{ color: '#00FF41' }}>,</span>
</div>
<div style={{ marginBottom: '6px' }}>
<span style={{ color: '#00FF41' }}>location</span><span style={{ color: '#00FF41' }}>:</span> <span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"Nepal 🇳🇵"</span><span style={{ color: '#00FF41' }}>,</span>
</div>
<div style={{ marginBottom: '6px' }}>
<span style={{ color: '#00FF41' }}>experience</span><span style={{ color: '#00FF41' }}>:</span> <span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"1+ years"</span><span style={{ color: '#00FF41' }}>,</span>
</div>
<div style={{ marginBottom: '12px' }}>
<span style={{ color: '#00FF41' }}>status</span><span style={{ color: '#00FF41' }}>:</span> <span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"available"</span><span style={{ color: '#00FF41' }}>,</span>
</div>
<div style={{ marginBottom: '6px' }}>
<span style={{ color: '#00FF41' }}>skills</span><span style={{ color: '#00FF41' }}>: [</span>
</div>
<div style={{ marginLeft: '12px', marginBottom: '6px' }}>
<span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"React"</span><span style={{ color: '#00FF41' }}>, </span>
<span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"JavaScript"</span><span style={{ color: '#00FF41' }}>, </span>
<span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"Python"</span><span style={{ color: '#00FF41' }}>,</span>
</div>
<div style={{ marginLeft: '12px', marginBottom: '6px' }}>
<span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"Node.js"</span><span style={{ color: '#00FF41' }}>, </span>
<span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"MongoDB"</span><span style={{ color: '#00FF41' }}>, </span>
<span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"HTML/CSS"</span>
</div>
<div style={{ marginBottom: '12px' }}>
<span style={{ color: '#00FF41' }}>],</span>
</div>
<div style={{ marginBottom: '6px' }}>
<span style={{ color: '#00FF41' }}>contact</span><span style={{ color: '#00FF41' }}>: {'{'}</span>
</div>
<div style={{ marginLeft: '12px', marginBottom: '4px' }}>
<span style={{ color: '#00FF41' }}>email</span><span style={{ color: '#00FF41' }}>:</span> <span style={{
color: '#FFFF00',
fontWeight: 'bold',
textShadow: '0 0 8px #FFFF00',
wordWrap: 'break-word',
overflowWrap: 'break-word'
}}>"bivaasbaral7@gmail.com"</span><span style={{ color: '#00FF41' }}>,</span>
</div>
<div style={{ marginLeft: '12px', marginBottom: '6px' }}>
<span style={{ color: '#00FF41' }}>github</span><span style={{ color: '#00FF41' }}>:</span> <span style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '0 0 8px #FFFF00' }}>"Bivaas"</span>
</div>
<div style={{ marginBottom: '6px' }}>
<span style={{ color: '#00FF41' }}>{'}'}</span>
</div>
</div>
<div style={{ color: '#00FF41' }}>
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
backgroundColor: '#A8DADC',
borderRadius: '50%',
mixBlendMode: 'multiply',
filter: 'blur(40px)',
opacity: 0.2,
animation: 'pulse 2s infinite'
}}></div>
<div style={{
position: 'absolute',
top: '75%',
right: '25%',
width: '288px',
height: '288px',
backgroundColor: '#FFC1CC',
borderRadius: '50%',
mixBlendMode: 'multiply',
filter: 'blur(40px)',
opacity: 0.2,
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
background: 'linear-gradient(to right, #A8DADC, #FFC1CC)',
WebkitBackgroundClip: 'text',
WebkitTextFillColor: 'transparent',
backgroundClip: 'text'
}}>
Bivaas Baral
</span>
</motion.h1>
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
style={{
fontSize: '1.25rem',
color: '#E4E4E4',
marginBottom: '32px',
height: '48px',
'@media (min-width: 768px)': {
fontSize: '1.5rem'
}
}}
>
<span style={{ marginRight: '8px' }}>I'm a</span>
<span style={{ color: '#A8DADC' }}>
<TypewriterEffect
words={['Full Stack Developer', 'UI/UX Designer', 'Problem Solver','Student']}
/>
</span>
</motion.div>
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.4 }}
className="responsive-flex-row"
style={{
display: 'flex',
flexDirection: 'column',
gap: '16px',
justifyContent: 'center'
}}
>
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
onClick={() => scrollToSection('projects')}
style={{
padding: '12px 32px',
background: '#B39CD0',
borderRadius: '9999px',
fontWeight: '600',
border: 'none',
color: 'white',
cursor: 'pointer',
transition: 'all 0.3s ease',
boxShadow: '0 0 0 0 rgba(179, 156, 208, 0.25)'
}}
onMouseEnter={(e) => {
e.target.style.boxShadow = '0 10px 25px rgba(179, 156, 208, 0.25)';
}}
onMouseLeave={(e) => {
e.target.style.boxShadow = '0 0 0 0 rgba(179, 156, 208, 0.25)';
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
border: '2px solid #A8DADC',
borderRadius: '9999px',
fontWeight: '600',
backgroundColor: 'transparent',
color: 'white',
cursor: 'pointer',
transition: 'all 0.3s ease'
}}
onMouseEnter={(e) => {
e.target.style.backgroundColor = 'rgba(168, 218, 220, 0.1)';
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
<svg style={{ width: '24px', height: '24px', color: '#A8DADC' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
About <span style={{ color: '#A8DADC' }}>Me</span>
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
background: 'linear-gradient(to right, #A8DADC, #FFC1CC)',
borderRadius: '50%',
filter: 'blur(40px)',
opacity: 0.3
}}></div>
<img
src="https://picsum.photos/seed/bivaas/400/400.jpg"
alt="Bivaas Baral, Full Stack Developer"
loading="lazy"
style={{
position: 'relative',
borderRadius: '50%',
width: '320px',
height: '320px',
margin: '0 auto',
objectFit: 'cover',
border: '4px solid rgba(168, 218, 220, 0.3)',
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
color: '#E4E4E4',
lineHeight: '1.75'
}}>
I'm a passionate developer with a love for creating and learning to make beautiful, functional web applications.
With expertise in modern JavaScript frameworks and a keen eye for design.
</p>
<blockquote style={{
fontSize: '1.25rem',
color: '#A8DADC',
fontWeight: 'bold',
fontFamily: 'Georgia, serif',
fontStyle: 'italic',
margin: '20px 0 0 0',
padding: '18px 370px',
background: 'rgba(168, 218, 220, 0.08)',
borderLeft: '5px solid #A8DADC',
borderRadius: '8px',
boxShadow: '0 2px 8px rgba(168, 218, 220, 0.08)'
}}>
"I bring ideas to life through code."
</blockquote>
<p style={{
fontSize: '1.125rem',
color: '#E4E4E4',
lineHeight: '1.75'
}}>
My journey in web development started 1 year ago, and since then, I've worked on various projects
ranging from small business* websites to complex enterprise* applications.
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
backgroundColor: 'rgba(44, 44, 44, 0.8)',
padding: '16px',
borderRadius: '8px',
border: '1px solid rgba(168, 218, 220, 0.3)',
transition: 'all 0.3s ease',
cursor: 'pointer'
}}
onMouseEnter={(e) => {
e.currentTarget.style.borderColor = 'rgba(168, 218, 220, 0.6)';
}}
onMouseLeave={(e) => {
e.currentTarget.style.borderColor = 'rgba(168, 218, 220, 0.3)';
}}
>
<div style={{
fontSize: '1.5rem',
fontWeight: 'bold',
color: '#A8DADC'
}}>{stat.value}</div>
<div style={{ color: '#E4E4E4' }}>{stat.label}</div>
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
style={{
padding: '80px 0',
backgroundColor: 'rgba(44, 44, 44, 0.5)'
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
My <span style={{ color: '#A8DADC' }}>Skills</span>
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
<span style={{ color: '#A8DADC' }}>{skill.level}%</span>
</div>
<div style={{
height: '12px',
backgroundColor: '#1a1a1a',
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
background: 'linear-gradient(to right, #A8DADC, #FFC1CC)',
borderRadius: '9999px'
}}
/>
</div>
</motion.div>
))}
</div>
</div>
</section>

{/* Projects Section - 修改后的部分 */}
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
color: '#A8DADC'
}}
>
Projects
</motion.h2>
<div className="responsive-grid-2 responsive-grid-4" style={{
display: 'grid',
gridTemplateColumns: '1fr',
gap: '20px'
}}>
{projects.map((project, index) => (
<motion.div
key={project.title}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.1 }}
style={{
position: 'relative',
overflow: 'hidden',
borderRadius: '16px',
backgroundColor: 'rgba(44, 44, 44, 0.8)',
border: '1px solid rgba(168, 218, 220, 0.2)',
transition: 'all 0.3s ease',
cursor: 'pointer',
height: '280px',
display: 'flex',
flexDirection: 'column',
padding: '20px'
}}
onMouseEnter={(e) => {
e.currentTarget.style.borderColor = 'rgba(168, 218, 220, 0.5)';
e.currentTarget.style.transform = 'translateY(-4px)';
}}
onMouseLeave={(e) => {
e.currentTarget.style.borderColor = 'rgba(168, 218, 220, 0.2)';
e.currentTarget.style.transform = 'translateY(0)';
}}
>
{/* Project Icon */}
<div style={{
fontSize: '2.5rem',
marginBottom: '16px',
display: 'flex',
justifyContent: 'flex-start'
}}>
{project.icon}
</div>
{/* Project Title */}
<h3 style={{
fontSize: '1.25rem',
fontWeight: 'bold',
marginBottom: '8px',
color: '#A8DADC'
}}>{project.title}</h3>
{/* Project Description */}
<p style={{
color: '#E4E4E4',
marginBottom: '16px',
fontSize: '0.875rem',
lineHeight: '1.4',
flexGrow: 1
}}>{project.description}</p>
{/* Technologies */}
<div style={{
display: 'flex',
flexWrap: 'wrap',
gap: '6px',
marginBottom: '20px'
}}>
{project.technologies.map((tech) => (
<span
key={tech}
style={{
padding: '4px 8px',
backgroundColor: 'rgba(168, 218, 220, 0.2)',
color: '#E4E4E4',
borderRadius: '4px',
fontSize: '0.75rem'
}}
>
{tech}
</span>
))}
</div>
{/* View Project Button */}
<motion.button
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
style={{
width: '100%',
padding: '10px 0',
background: '#B39CD0',
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
e.target.style.background = '#9A7BB8';
}}
onMouseLeave={(e) => {
e.target.style.background = '#B39CD0';
}}
onClick={() => {
if (project.title === 'Hamro-Doko') {
window.open('https://hamrodoko.netlify.app', '_blank');
}
}}
>
View Project
</motion.button>
</motion.div>
))}
</div>
</div>
</section>

{/* Contact Section */}
<section
id="contact"
ref={el => sections.current[4] = el}
style={{
padding: '80px 0',
backgroundColor: 'rgba(44, 44, 44, 0.5)'
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
Get In <span style={{ color: '#A8DADC' }}>Touch</span>
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
backgroundColor: 'rgba(44, 44, 44, 0.8)',
border: '1px solid rgba(168, 218, 220, 0.3)',
borderRadius: '8px',
color: 'white',
fontSize: '16px',
transition: 'all 0.3s ease',
outline: 'none'
}}
placeholder="Your Name"
onFocus={(e) => {
e.target.style.borderColor = '#A8DADC';
}}
onBlur={(e) => {
e.target.style.borderColor = 'rgba(168, 218, 220, 0.3)';
}}
/>
</div>
<div>
<label style={{
display: 'block',
fontSize: '0.875rem',
fontWeight: '500',
marginBottom: '8px'
}}>Email</label> <input
type="email"
name="email"
value={formData.email}
onChange={handleInputChange}
required
style={{
width: '100%',
padding: '12px 16px',
backgroundColor: 'rgba(44, 44, 44, 0.8)',
border: '1px solid rgba(168, 218, 220, 0.3)',
borderRadius: '8px',
color: 'white',
fontSize: '16px',
transition: 'all 0.3s ease',
outline: 'none'
}}
placeholder="your@email.com"
onFocus={(e) => {
e.target.style.borderColor = '#A8DADC';
}}
onBlur={(e) => {
e.target.style.borderColor = 'rgba(168, 218, 220, 0.3)';
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
backgroundColor: 'rgba(44, 44, 44, 0.8)',
border: '1px solid rgba(168, 218, 220, 0.3)',
borderRadius: '8px',
color: 'white',
fontSize: '16px',
transition: 'all 0.3s ease',
outline: 'none',
resize: 'none',
fontFamily: 'inherit'
}}
placeholder="Your message..."
onFocus={(e) => {
e.target.style.borderColor = '#A8DADC';
}}
onBlur={(e) => {
e.target.style.borderColor = 'rgba(168, 218, 220, 0.3)';
}}
></textarea>
</div>
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
type="submit"
style={{
width: '100%',
padding: '12px 0',
background: '#B39CD0',
borderRadius: '8px',
fontWeight: '600',
border: 'none',
color: 'white',
cursor: 'pointer',
transition: 'all 0.3s ease',
boxShadow: '0 0 0 0 rgba(179, 156, 208, 0.25)',
fontSize: '16px'
}}
onMouseEnter={(e) => {
e.target.style.boxShadow = '0 10px 25px rgba(179, 156, 208, 0.25)';
}}
onMouseLeave={(e) => {
e.target.style.boxShadow = '0 0 0 0 rgba(179, 156, 208, 0.25)';
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
color: '#E4E4E4',
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
<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
</svg>
)
}
].map((platform) => (
<motion.a
key={platform.name}
href={platform.url}
target={['Discord', 'GitHub', 'Twitter', 'Email'].includes(platform.name) ? '_blank' : '_self'}
rel={['Discord', 'GitHub', 'Twitter', 'Email'].includes(platform.name) ? 'noopener noreferrer' : ''}
whileHover={{ scale: 1.15, y: -5 }}
whileTap={{ scale: 0.95 }}
style={{
color: '#E4E4E4',
transition: 'all 0.3s ease',
textDecoration: 'none'
}}
onMouseEnter={(e) => {
e.currentTarget.style.color = '#A8DADC';
}}
onMouseLeave={(e) => {
e.currentTarget.style.color = '#E4E4E4';
}}
>
<div style={{
width: '48px',
height: '48px',
backgroundColor: 'rgba(44, 44, 44, 0.8)',
borderRadius: '50%',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
border: '1px solid rgba(168, 218, 220, 0.2)',
transition: 'all 0.3s ease'
}}
onMouseEnter={(e) => {
e.currentTarget.style.borderColor = 'rgba(168, 218, 220, 0.5)';
e.currentTarget.style.backgroundColor = 'rgba(168, 218, 220, 0.1)';
}}
onMouseLeave={(e) => {
e.currentTarget.style.borderColor = 'rgba(168, 218, 220, 0.2)';
e.currentTarget.style.backgroundColor = 'rgba(44, 44, 44, 0.8)';
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
{/* Footer */}
<footer style={{
padding: '32px 0',
borderTop: '1px solid rgba(168, 218, 220, 0.3)'
}}>
<div style={{
padding: '0 24px',
textAlign: 'center'
}}>
<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
style={{ color: '#E4E4E4' }}
>
© {new Date().getFullYear()} Bivaas Baral. All rights reserved.
</motion.p>
</div>
</footer>
</div>
<Toaster position="top-right" reverseOrder={false} />
</>
);
};
// Typewriter Effect Component
const TypewriterEffect = React.memo(({ words }) => {
const [currentWordIndex, setCurrentWordIndex] = useState(0);
const [currentText, setCurrentText] = useState('');
const [isDeleting, setIsDeleting] = useState(false);
useEffect(() => {
const currentWord = words[currentWordIndex];
const timeout = setTimeout(() => {
if (!isDeleting) {
setCurrentText(currentWord.substring(0, currentText.length + 1));
if (currentText === currentWord) {
setTimeout(() => setIsDeleting(true), 1000);
}
} else {
setCurrentText(currentWord.substring(0, currentText.length - 1));
if (currentText === '') {
setIsDeleting(false);
setCurrentWordIndex((currentWordIndex + 1) % words.length);
}
}
}, isDeleting ? 50 : 100);
return () => clearTimeout(timeout);
}, [currentText, isDeleting, currentWordIndex, words]); // Added dependencies
return (
<span style={{
display: 'inline-block',
minWidth: '200px'
}}>
{currentText}
<span style={{
animation: 'pulse 1s infinite'
}}>|</span>
</span>
);
});
export default Portfolio;