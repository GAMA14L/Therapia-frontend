import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center bg-white shadow-md p-4 rounded-2xl mb-6">
      <img src="/Logo.png" alt="Logo" className="h-16 w-16 mr-4 rounded-full shadow" />
      <div>
        <h1 className="text-3xl font-bold text-purple-800">THERAPIA</h1>
        <p className="text-sm text-gray-500">Tu espacio seguro de bienestar emocional</p>
      </div>
    </header>
  );
};

export default Header;
