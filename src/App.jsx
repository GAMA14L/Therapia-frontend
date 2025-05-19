import React from 'react';
import Chatbot from './ChatBot';
import logo from './assets/logo.png'; // Asegúrate que la ruta sea correcta

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex flex-col items-center justify-start py-12 px-6">
      <header className="flex items-center space-x-4 mb-8">
        <img 
          src={logo} 
          alt="Therap-IA Logo" 
          className="w-14 h-14 rounded-full shadow-lg border-4 border-purple-500"
        />
        <h1 className="text-5xl font-extrabold text-purple-900 tracking-wide">
          Therap-IA
        </h1>
      </header>

      <p className="text-center text-purple-700 max-w-xl mb-12 text-lg leading-relaxed">
        Tu espacio de apoyo emocional con inteligencia artificial. Conversaciones empáticas, 
        orientación, y motivación para tu bienestar mental.
      </p>

      <main className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl border border-purple-300">
        <Chatbot />
      </main>
    </div>
  );
}

export default App;
