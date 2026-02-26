import { Plus, Filter, ArrowRight } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { Card, CardContent, CardFooter } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { mockProjects } from '../data/mockData';
import { Link } from 'react-router-dom';

export const ResearcherDashboard = () => {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar role="Researcher" />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Researcher Dashboard</h1>
              <p className="text-slate-400">Welcome back, Dr. Sarah. Here's what's happening with your projects.</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-pink-600 text-white border-none">
              <CardContent className="pt-6">
                <p className="text-pink-100 text-sm font-medium">Active Projects</p>
                <h3 className="text-3xl font-bold mt-1">12</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-slate-400 text-sm font-medium">Collaboration Requests</p>
                <h3 className="text-3xl font-bold mt-1 text-white">5</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-slate-400 text-sm font-medium">Messages</p>
                <h3 className="text-3xl font-bold mt-1 text-white">24</h3>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">My Projects</h2>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
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
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                          <img src={`https://picsum.photos/seed/${project.id}${i}/100/100`} alt="Member" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                      <div className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                        +2
                      </div>
                    </div>
                    <Link to={`/project/${project.id}`}>
                      <Button variant="ghost" size="sm" className="gap-1 text-pink-500 hover:text-pink-400 hover:bg-pink-500/10">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
