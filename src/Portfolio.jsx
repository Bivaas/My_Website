import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-6 transition-all duration-700">
      <div className="bg-white/80 rounded-xl shadow-xl p-8 w-full max-w-xl animate-fade-in">
        <h1 className="text-4xl font-bold text-purple-700 mb-2 transition-colors duration-500 hover:text-pink-500">bivaas baral</h1>
        <p className="text-lg text-gray-700 mb-6 animate-slide-up">Welcome to my personal portfolio! I am passionate about web development and design.</p>
        <div className="flex gap-4 mb-6">
          <button className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-pink-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300">Contact Me</button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-green-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">Download CV</button>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h2>
          <p className="text-gray-600">I am a frontend developer skilled in React and Tailwind CSS. I love creating beautiful, interactive user interfaces with smooth transitions and effects.</p>
        </div>
      </div>
    </div>
  );
}

// Tailwind custom animations
// Add these to your tailwind.config.js:
// extend: {
//   keyframes: {
//     'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
//     'slide-up': { '0%': { transform: 'translateY(40px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
//   },
//   animation: {
//     'fade-in': 'fade-in 1s ease-out',
//     'slide-up': 'slide-up 1s ease-out',
//   },
// }
