import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { Card, CardContent, CardFooter } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { mockProjects } from '../data/mockData';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';

export const MyProjectsPage = () => {
  // For demo, we'll just show all projects as "mine"
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar role="Researcher" />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">My Projects</h1>
              <p className="text-slate-400">Manage and track your ongoing research collaborations.</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project) => (
              <Card key={project.id} className="flex flex-col h-full">
                <CardContent className="pt-6 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold text-pink-500 uppercase tracking-wider">{project.domain}</span>
                    <Badge status={project.status} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Last updated 2 days ago
                  </div>
                  <Link to={`/project/${project.id}`}>
                    <Button variant="ghost" size="sm" className="gap-1 text-pink-500 hover:bg-pink-500/10">
                      Manage
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
