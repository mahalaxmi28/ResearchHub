import { Project, User } from '../types';

export const mockUsers: User[] = [
  {
    id: 'u1',
    fullName: 'Dr. Sarah Chen',
    email: 'sarah.chen@university.edu',
    institution: 'Stanford University',
    domain: 'Quantum Computing',
    role: 'Researcher',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: 'u2',
    fullName: 'Prof. James Wilson',
    email: 'james.wilson@admin.edu',
    institution: 'MIT',
    domain: 'Administration',
    role: 'Admin',
    avatar: 'https://picsum.photos/seed/james/100/100',
  },
];

export const mockProjects: Project[] = [
  {
    id: 'p1',
    title: 'Neural Network Optimization for Edge Devices',
    domain: 'Artificial Intelligence',
    description: 'Developing lightweight neural architectures specifically designed for low-power edge computing devices without compromising accuracy.',
    status: 'Active',
    members: ['u1'],
    ownerId: 'u1',
    createdAt: '2024-01-15',
  },
  {
    id: 'p2',
    title: 'Sustainable Urban Water Management Systems',
    domain: 'Environmental Science',
    description: 'A study on implementing smart sensors and AI to optimize water distribution and reduce waste in metropolitan areas.',
    status: 'Pending',
    members: ['u1'],
    ownerId: 'u1',
    createdAt: '2024-02-10',
  },
  {
    id: 'p3',
    title: 'Genomic Sequence Analysis of Rare Pathogens',
    domain: 'Bioinformatics',
    description: 'Using high-throughput sequencing to identify novel genetic markers in emerging rare diseases.',
    status: 'Completed',
    members: ['u1', 'u3'],
    ownerId: 'u3',
    createdAt: '2023-11-05',
  },
  {
    id: 'p4',
    title: 'Quantum Entanglement in Room Temperature Superconductors',
    domain: 'Physics',
    description: 'Exploring the theoretical possibilities of maintaining quantum coherence in high-temperature superconducting materials.',
    status: 'Pending',
    members: ['u4'],
    ownerId: 'u4',
    createdAt: '2024-02-20',
  },
];
