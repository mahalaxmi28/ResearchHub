export type Role = 'Admin' | 'Researcher';

export interface User {
  id: string;
  fullName: string;
  email: string;
  institution: string;
  domain: string;
  role: Role;
  avatar?: string;
}

export type ProjectStatus = 'Pending' | 'Active' | 'Completed' | 'Rejected';

export interface Project {
  id: string;
  title: string;
  domain: string;
  description: string;
  status: ProjectStatus;
  members: string[]; // User IDs
  ownerId: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}
