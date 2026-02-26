import { LayoutDashboard, FolderKanban, Globe, MessageSquare, UserCircle, LogOut, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Sidebar = ({ role = 'Researcher' }: { role?: 'Researcher' | 'Admin' }) => {
  const location = useLocation();

  const researcherLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/researcher' },
    { name: 'My Projects', icon: FolderKanban, path: '/my-projects' },
    { name: 'Explore Projects', icon: Globe, path: '/explore' },
    { name: 'Messages', icon: MessageSquare, path: '/messages' },
    { name: 'Profile', icon: UserCircle, path: '/profile' },
  ];

  const adminLinks = [
    { name: 'Admin Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Manage Projects', icon: FolderKanban, path: '/admin/projects' },
    { name: 'User Management', icon: UserCircle, path: '/admin/users' },
  ];

  const links = role === 'Admin' ? adminLinks : researcherLinks;

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900 flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-pink-600 p-2 rounded-lg">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">Researchhub</span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group',
                isActive
                  ? 'bg-pink-500/10 text-pink-500'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              )}
            >
              <Icon className={cn('h-5 w-5', isActive ? 'text-pink-500' : 'text-slate-500 group-hover:text-slate-300')} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </Link>
      </div>
    </aside>
  );
};
