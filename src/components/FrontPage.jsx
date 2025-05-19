import React from 'react';

function FrontPage({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-fuchsia-500 text-white flex flex-col justify-center items-center px-6 py-12 animate-fadeIn">
      <h1 className="text-5xl font-bold mb-6 text-center drop-shadow-lg">
        🔮 Welcome to Vibe Checker
      </h1>
      <p className="text-xl text-center max-w-xl mb-8">
        "Understand your mood. Reflect your energy. Take the vibe quiz and reveal your inner aura."
      </p>
      
      <div className="bg-white text-gray-900 shadow-2xl rounded-2xl p-6 mb-8 text-center w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-2">Created by</h2>
        <p className="text-2xl font-bold text-indigo-600">Sahil Ahmad Shah</p>
        <p className="text-sm mt-1 text-gray-600 italic">Full Stack Developer • Tech Enthusiast • SpringBoot + React Js</p>
      </div>

      <button
        onClick={onStart}
        className="bg-white text-indigo-600 font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300"
      >
        🚀 Start the Vibe Quiz
      </button>
    </div>
  );
}
export default FrontPage;

