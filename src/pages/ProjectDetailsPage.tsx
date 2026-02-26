import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, Globe, MessageSquare, Send } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { Card, CardContent, CardHeader } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { mockProjects } from '../data/mockData';

export const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen bg-black items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
          <Link to="/researcher" className="text-pink-500 hover:underline mt-4 block">Return to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar role="Researcher" />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 max-w-5xl mx-auto w-full space-y-8">
          <Link to="/researcher" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <Badge status={project.status} />
                <span className="text-sm font-medium text-pink-500 uppercase tracking-wider">{project.domain}</span>
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight">{project.title}</h1>
              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Created on {project.createdAt}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {project.members.length + 2} Contributors
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Open Collaboration
                </div>
              </div>
            </div>
            <Button size="lg" className="shadow-lg shadow-pink-900/20">Apply to Join</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-white">Project Description</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 leading-relaxed">
                    {project.description}
                    <br /><br />
                    This research aims to bridge the gap between theoretical models and practical applications. We are currently focusing on data collection phases and initial prototyping. Contributors will have the opportunity to participate in peer-reviewed publications and gain hands-on experience with cutting-edge methodologies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">Discussion</h2>
                  <Badge status="Active" className="bg-pink-500/10 text-pink-500 border-pink-500/30" />
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-slate-800 shrink-0 overflow-hidden">
                          <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-1 bg-slate-800 rounded-2xl p-4 border border-slate-700">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-bold text-white">Dr. Researcher {i}</span>
                            <span className="text-xs text-slate-500">2 hours ago</span>
                          </div>
                          <p className="text-sm text-slate-400">
                            {i === 1 
                              ? "I've uploaded the latest dataset to the shared drive. Let me know if anyone has trouble accessing it."
                              : "Great work! I'll start the preliminary analysis this afternoon."}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t border-slate-800">
                    <div className="h-10 w-10 rounded-full bg-pink-500/10 shrink-0 flex items-center justify-center text-pink-500">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="flex-1 relative">
                      <textarea 
                        placeholder="Write a message..."
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 min-h-[100px] resize-none"
                      />
                      <button className="absolute bottom-3 right-3 p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-white">Team Members</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  {['Sarah Chen', 'Michael Ross', 'Elena Gilbert'].map((name, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-800 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${name}/100/100`} alt={name} referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{name}</p>
                        <p className="text-xs text-slate-400">{i === 0 ? 'Project Lead' : 'Collaborator'}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-2">View All Members</Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 text-white border-none">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-pink-600 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Need Help?</h3>
                  <p className="text-sm text-slate-400">Contact the project lead or the administration for any queries regarding this research.</p>
                  <Button variant="secondary" className="w-full bg-white/10 text-white hover:bg-white/20 border-none">Contact Admin</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
