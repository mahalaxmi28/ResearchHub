import React from 'react';
import { cn } from '../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('bg-slate-900 rounded-xl border border-slate-800 shadow-sm overflow-hidden', className)} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div className={cn('px-6 py-4 border-b border-slate-800', className)} {...props}>{children}</div>
);

export const CardContent: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div className={cn('px-6 py-4', className)} {...props}>{children}</div>
);

export const CardFooter: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div className={cn('px-6 py-4 bg-slate-800/50 border-t border-slate-800', className)} {...props}>{children}</div>
);
