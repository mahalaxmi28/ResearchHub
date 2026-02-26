import { Bell, Search, User } from 'lucide-react';
import { Button } from './Button';

export const Navbar = () => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4 w-1/3">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search projects, researchers..."
            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5 text-slate-400" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
        </Button>
        <div className="h-8 w-px bg-slate-800 mx-2"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-white">Dr. Sarah Chen</p>
            <p className="text-xs text-slate-400">Researcher</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 border border-pink-500/30 overflow-hidden">
            <img src="https://picsum.photos/seed/sarah/100/100" alt="Avatar" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </header>
  );
};
