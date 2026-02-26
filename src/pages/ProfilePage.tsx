import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { Card, CardContent, CardHeader } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { User, Mail, Building, Globe, Shield, Camera } from 'lucide-react';

export const ProfilePage = () => {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar role="Researcher" />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 max-w-4xl mx-auto w-full space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-white">My Profile</h1>
            <p className="text-slate-400">Manage your personal information and research preferences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Card className="text-center p-6">
                <div className="relative inline-block mx-auto">
                  <div className="h-32 w-32 rounded-full bg-slate-800 border-4 border-slate-900 shadow-md overflow-hidden mx-auto">
                    <img src="https://picsum.photos/seed/sarah/200/200" alt="Profile" referrerPolicy="no-referrer" />
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">Dr. Sarah Chen</h3>
                <p className="text-sm text-slate-400">Senior Researcher</p>
                <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xl font-bold text-white">12</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Projects</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">45</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Citations</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Verification</h4>
                <div className="flex items-center gap-3 text-emerald-500 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30">
                  <Shield className="h-5 w-5" />
                  <span className="text-xs font-medium">Verified Academic</span>
                </div>
              </Card>
            </div>

            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-white">Personal Information</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Full Name" defaultValue="Dr. Sarah Chen" icon={User} />
                    <Input label="Email Address" defaultValue="sarah.chen@university.edu" icon={Mail} />
                    <Input label="Institution" defaultValue="Stanford University" icon={Building} />
                    <Input label="Research Domain" defaultValue="Quantum Computing" icon={Globe} />
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <label className="text-sm font-medium text-slate-300">Bio</label>
                    <textarea
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 min-h-[100px]"
                      defaultValue="Passionate about quantum algorithms and their applications in cryptography and optimization problems."
                    />
                  </div>
                  <div className="flex justify-end pt-4">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-white">Security</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <div>
                      <h4 className="text-sm font-bold text-white">Password</h4>
                      <p className="text-xs text-slate-500">Last changed 3 months ago</p>
                    </div>
                    <Button variant="outline" size="sm">Change Password</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <div>
                      <h4 className="text-sm font-bold text-white">Two-Factor Authentication</h4>
                      <p className="text-xs text-slate-500">Secure your account with 2FA</p>
                    </div>
                    <Button variant="outline" size="sm">Enable</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
