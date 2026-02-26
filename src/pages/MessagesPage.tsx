import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { Search, Send, MoreVertical, Phone, Video } from 'lucide-react';

export const MessagesPage = () => {
  const [activeContactId, setActiveContactId] = useState(1);
  const [messageText, setMessageText] = useState('');
  const [chatHistory, setChatHistory] = useState<{ [key: number]: any[] }>({
    1: [
      { id: 1, sender: 'Sarah', text: 'I have uploaded the latest dataset to the shared drive. Let me know if anyone has trouble accessing it.', time: '10:45 AM', isMe: false },
      { id: 2, sender: 'Me', text: "Thanks Sarah! I'll check it out right away.", time: '10:48 AM', isMe: true },
    ],
    2: [
      { id: 1, sender: 'James', text: 'The approval is pending for your latest submission.', time: 'Yesterday', isMe: false },
    ],
    3: [
      { id: 1, sender: 'Elena', text: 'Can we meet tomorrow at 10?', time: 'Yesterday', isMe: false },
    ],
  });

  const contacts = [
    { id: 1, name: 'Dr. Sarah Chen', lastMsg: 'I have uploaded the latest dataset...', time: '2h ago' },
    { id: 2, name: 'Prof. James Wilson', lastMsg: 'The approval is pending for your...', time: '5h ago' },
    { id: 3, name: 'Elena Gilbert', lastMsg: 'Can we meet tomorrow at 10?', time: '1d ago' },
  ];

  const activeContact = contacts.find(c => c.id === activeContactId) || contacts[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: 'Me',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };

    setChatHistory(prev => ({
      ...prev,
      [activeContactId]: [...(prev[activeContactId] || []), newMessage],
    }));
    setMessageText('');
  };

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar role="Researcher" />
      <div className="flex-1 flex flex-col h-screen">
        <Navbar />
        <main className="flex-1 flex overflow-hidden">
          {/* Contacts Sidebar */}
          <div className="w-80 border-r border-slate-800 bg-slate-900 flex flex-col">
            <div className="p-4 border-b border-slate-800">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setActiveContactId(contact.id)}
                  className={`w-full p-4 flex gap-3 items-start hover:bg-slate-800 transition-colors text-left border-b border-slate-800 ${
                    activeContactId === contact.id ? 'bg-pink-500/10 border-l-4 border-l-pink-500' : ''
                  }`}
                >
                  <div className="h-10 w-10 rounded-full bg-slate-800 shrink-0 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${contact.name}/100/100`} alt={contact.name} referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-sm font-bold text-white truncate">{contact.name}</h4>
                      <span className="text-[10px] text-slate-500 shrink-0">{contact.time}</span>
                    </div>
                    <p className="text-xs text-slate-400 truncate">{contact.lastMsg}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-slate-900">
            <div className="h-16 border-b border-slate-800 px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-800 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${activeContact.name}/100/100`} alt={activeContact.name} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{activeContact.name}</h4>
                  <p className="text-[10px] text-emerald-500 font-medium">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm"><Phone className="h-4 w-4 text-slate-400" /></Button>
                <Button variant="ghost" size="sm"><Video className="h-4 w-4 text-slate-400" /></Button>
                <Button variant="ghost" size="sm"><MoreVertical className="h-4 w-4 text-slate-400" /></Button>
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-black/50">
              <div className="flex justify-center">
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded-full uppercase font-bold tracking-widest">Today</span>
              </div>
              
              {chatHistory[activeContactId]?.map((msg) => (
                <div key={msg.id} className={`flex gap-3 max-w-[70%] ${msg.isMe ? 'ml-auto flex-row-reverse' : ''}`}>
                  {!msg.isMe && (
                    <div className="h-8 w-8 rounded-full bg-slate-800 shrink-0 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${activeContact.name}/100/100`} alt={activeContact.name} referrerPolicy="no-referrer" />
                    </div>
                  )}
                  {msg.isMe && (
                    <div className="h-8 w-8 rounded-full bg-pink-600 shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
                      ME
                    </div>
                  )}
                  <div className={`${msg.isMe ? 'bg-pink-600 text-white rounded-tr-none' : 'bg-slate-800 border border-slate-700 rounded-tl-none'} p-3 rounded-2xl shadow-sm`}>
                    <p className="text-sm">{msg.text}</p>
                    <span className={`text-[10px] mt-1 block ${msg.isMe ? 'text-pink-200 text-right' : 'text-slate-500'}`}>{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-800">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full pl-4 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};
