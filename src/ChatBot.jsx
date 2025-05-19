import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const res = await axios.post('http://localhost:5000/chat', { message: input });
      const aiMessage = { role: 'assistant', content: res.data.aiResponse };
      setMessages(prev => [...prev, userMessage, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="flex flex-col h-[500px] overflow-hidden bg-white rounded-xl shadow-lg p-4">
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 max-w-[80%] rounded-2xl shadow-sm text-sm ${
              msg.role === 'user'
                ? 'bg-purple-600 text-white self-end'
                : 'bg-purple-100 text-purple-800 self-start'
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          className="flex-1 px-4 py-2 rounded-l-full border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-purple-600 text-white px-6 rounded-r-full hover:bg-purple-700 transition-colors"
          onClick={sendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
