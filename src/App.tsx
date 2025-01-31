import React, { useState } from 'react';
import { DashboardView } from './components/DashboardView';
import { ContactsView } from './components/ContactsView';
import { ChatView } from './components/ChatView';
import { BookmarksView } from './components/BookmarksView';
import { GalleryView } from './components/GalleryView';
import { Home, Users, MessageCircle, Bookmark, Image } from 'lucide-react';

type ViewType = 'dashboard' | 'contacts' | 'chat' | 'bookmarks' | 'gallery';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  return (
    <div className="h-screen max-h-screen w-screen max-w-md mx-auto bg-black flex flex-col overflow-hidden">
      {currentView === 'dashboard' && <DashboardView />}
      {currentView === 'contacts' && <ContactsView />}
      {currentView === 'chat' && <ChatView />}
      {currentView === 'bookmarks' && <BookmarksView />}
      {currentView === 'gallery' && <GalleryView />}
      
      <nav className="flex justify-around p-4 bg-black border-t border-gray-800">
        <button 
          onClick={() => setCurrentView('dashboard')}
          className={`${currentView === 'dashboard' ? 'text-indigo-400' : 'text-gray-500'}`}
        >
          <Home className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setCurrentView('contacts')}
          className={`${currentView === 'contacts' ? 'text-indigo-400' : 'text-gray-500'}`}
        >
          <Users className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setCurrentView('chat')}
          className={`${currentView === 'chat' ? 'text-indigo-400' : 'text-gray-500'}`}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setCurrentView('bookmarks')}
          className={`${currentView === 'bookmarks' ? 'text-indigo-400' : 'text-gray-500'}`}
        >
          <Bookmark className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setCurrentView('gallery')}
          className={`${currentView === 'gallery' ? 'text-indigo-400' : 'text-gray-500'}`}
        >
          <Image className="w-6 h-6" />
        </button>
      </nav>
    </div>
  );
}

export default App;