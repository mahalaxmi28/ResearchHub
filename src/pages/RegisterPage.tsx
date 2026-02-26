import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { GraduationCap } from 'lucide-react';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'Researcher' | 'Admin'>('Researcher');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/researcher');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 py-12">
      <div className="max-w-xl w-full space-y-8 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl shadow-black/50">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-pink-600 rounded-xl mb-4">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">Join Researchhub</h2>
          <p className="mt-2 text-slate-400">Empowering global research collaboration</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full Name" placeholder="Dr. Jane Doe" required />
            <Input label="Email Address" type="email" placeholder="jane@university.edu" required />
            <Input label="Institution" placeholder="University of Excellence" required />
            <Input label="Research Domain" placeholder="e.g. Astrophysics" required />
            <Input label="Password" type="password" placeholder="••••••••" required className="md:col-span-2" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-300">Register as</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('Researcher')}
                className={`py-2 px-4 rounded-lg text-sm font-medium border transition-all ${
                  role === 'Researcher'
                    ? 'bg-pink-500/10 border-pink-500/30 text-pink-500 shadow-sm'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                }`}
              >
                Researcher
              </button>
              <button
                type="button"
                onClick={() => setRole('Admin')}
                className={`py-2 px-4 rounded-lg text-sm font-medium border transition-all ${
                  role === 'Admin'
                    ? 'bg-pink-500/10 border-pink-500/30 text-pink-500 shadow-sm'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link to="/" className="font-medium text-pink-500 hover:text-pink-400">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};
