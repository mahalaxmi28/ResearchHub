import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { Card, CardContent, CardFooter } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { mockProjects } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';

export const ExploreProjectsPage = () => {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar role="Researcher" />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Explore Projects</h1>
              <p className="text-slate-400">Discover new research opportunities and potential collaborators.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search by domain..."
                  className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project) => (
              <Card key={project.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold text-pink-500 uppercase tracking-wider">{project.domain}</span>
                    <Badge status={project.status} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-slate-800 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${project.ownerId}/100/100`} alt="Owner" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-xs text-slate-400">Dr. Researcher</span>
                  </div>
                  <Link to={`/project/${project.id}`}>
                    <Button variant="primary" size="sm" className="gap-1">
                      View
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
