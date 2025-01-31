import React, { useState } from 'react';
import { PenSquare, User, RotateCcw, Send } from 'lucide-react';
import { Message } from '../types';

const initialMessages: Message[] = [
  { id: 1, text: "Have you seen the original Star Wars trilogy?", isUser: true, timestamp: "10:30" },
  { id: 2, text: "Of course! The original trilogy is a masterpiece. Empire Strikes Back is my favorite.", isUser: false, timestamp: "10:31" },
  { id: 3, text: "Totally agree.", isUser: true, timestamp: "10:31" },
  { id: 4, text: "The Vader reveal in Empire is one of the most iconic moments in cinema history.", isUser: true, timestamp: "10:32" },
  { id: 5, text: "Absolutely. But I also love the space battle in Return of the Jedi. It was epic for its time.", isUser: false, timestamp: "10:33" },
];

export function ChatView() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const newMessageObj: Message = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
      timestamp: currentTime
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-black overflow-hidden">
      <header className="p-4 flex justify-between items-center bg-gray-900">
        <div className="text-amber-400 font-semibold">John Doe &gt;</div>
        <div className="flex gap-4">
          <PenSquare className="w-6 h-6 text-indigo-400" />
          <User className="w-6 h-6 text-indigo-400" />
          <RotateCcw className="w-6 h-6 text-indigo-400" />
        </div>
      </header>

      <div className="flex-1 p-4 overflow-y-auto hide-scrollbar">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[80%] mb-4 ${message.isUser ? 'ml-auto' : 'mr-auto'}`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.isUser ? 'bg-blue-600' : 'bg-red-600'
              }`}
            >
              <p className="text-white">{message.text}</p>
              <p className="text-xs text-gray-300 mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button 
            onClick={handleSendMessage}
            className="bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}