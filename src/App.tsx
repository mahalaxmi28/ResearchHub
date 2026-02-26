import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ResearcherDashboard } from './pages/ResearcherDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { MyProjectsPage } from './pages/MyProjectsPage';
import { ExploreProjectsPage } from './pages/ExploreProjectsPage';
import { MessagesPage } from './pages/MessagesPage';
import { ProfilePage } from './pages/ProfilePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/researcher" element={<ResearcherDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
        <Route path="/my-projects" element={<MyProjectsPage />} />
        <Route path="/explore" element={<ExploreProjectsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        
        {/* Fallback for other routes */}
        <Route path="*" element={<ResearcherDashboard />} />
      </Routes>
    </Router>
  );
}
