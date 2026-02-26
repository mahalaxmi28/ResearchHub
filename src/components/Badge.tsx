import React from 'react';
import { ProjectStatus } from '../types';
import { cn } from '../lib/utils';

interface BadgeProps {
  status: ProjectStatus;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, className }) => {
  const styles = {
    Pending: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    Active: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    Completed: 'bg-pink-500/10 text-pink-500 border-pink-500/30',
    Rejected: 'bg-red-500/10 text-red-500 border-red-500/30',
  };

  return (
    <span className={cn('px-2.5 py-0.5 rounded-full text-xs font-medium border', styles[status], className)}>
      {status}
    </span>
  );
};
