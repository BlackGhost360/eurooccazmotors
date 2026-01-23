
import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { getCarRecommendation } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    
    const userMsg = prompt;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setPrompt('');
    setIsLoading(true);

    const response = await getCarRecommendation(userMsg);
    setMessages(prev => [...prev, { role: 'bot', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100">
          <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Bot size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">Assistant IA</span>
                <span className="text-[10px] text-green-400">● En ligne</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full"><X size={20} /></button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <MessageSquare size={24} />
                </div>
                <p className="text-sm text-slate-500">Posez vos questions sur nos véhicules ou demandez un conseil personnalisé !</p>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-100 text-slate-800 rounded-tl-none'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-blue-600" />
                  <span className="text-xs text-slate-400 italic">En réflexion...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Ex: Quel SUV hybride me conseillez-vous ?"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                className="bg-blue-600 p-2 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-blue-600 transition-all group relative"
        >
          <MessageSquare size={28} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Besoin d'aide ? Chattez avec notre expert !
          </span>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
