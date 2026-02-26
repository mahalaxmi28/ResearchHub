import { Check, X, Users, FolderKanban, ShieldCheck } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { Card, CardContent } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { mockProjects } from '../data/mockData';

export const AdminDashboard = () => {
  const pendingProjects = mockProjects.filter(p => p.status === 'Pending');

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar role="Admin" />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Overview</h1>
            <p className="text-slate-400">System-wide statistics and pending approvals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">Total Users</p>
                  <h3 className="text-2xl font-bold text-white">1,284</h3>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <FolderKanban className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">Total Projects</p>
                  <h3 className="text-2xl font-bold text-white">456</h3>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">Pending Approvals</p>
                  <h3 className="text-2xl font-bold text-white">{pendingProjects.length}</h3>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Pending Project Approvals</h2>
            <Card className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-800 border-b border-slate-700">
                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Project Details</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Domain</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Submitted By</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {pendingProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-white">{project.title}</p>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{project.description}</p>
                      </td>
                      <td className="px-6 py-4">
                        <Badge status="Pending" />
                        <span className="ml-2 text-sm text-slate-400">{project.domain}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-slate-800 overflow-hidden">
                            <img src={`https://picsum.photos/seed/${project.ownerId}/100/100`} alt="Owner" referrerPolicy="no-referrer" />
                          </div>
                          <span className="text-sm text-slate-300">Researcher #{project.ownerId}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline" size="sm" className="text-red-500 hover:bg-red-500/10 border-red-500/30">
                            <X className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                            <Check className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
