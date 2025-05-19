import React from 'react';
import Chatbot from './ChatBot';
import logo from './assets/logo.png'; // Asegúrate de tener tu logo en src/assets/logo.png

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex flex-col items-center justify-start py-10 px-4">
      <div className="flex items-center space-x-4 mb-6">
        <img src={logo} alt="Therap-IA Logo" className="w-12 h-12 rounded-full shadow-lg" />
        <h1 className="text-4xl font-bold text-purple-800">Therap-IA</h1>
      </div>

      <p className="text-center text-purple-700 max-w-xl mb-10">
        Tu espacio de apoyo emocional con inteligencia artificial. Conversaciones empáticas,
        orientación, y motivación para tu bienestar mental.
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl border border-purple-200">
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
