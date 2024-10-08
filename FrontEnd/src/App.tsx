import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Badge from './components/Badge';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Profile from './components/Profile';
import Backlog from './components/Backlog';
import Performance from './components/Performance';
import ChallengeOfTheDay from './components/ChallengeOfTheDay';
import './styles/variables.css';
import './styles/Navbar.css';
import './styles/Badge.css';
import './styles/Sidebar.css';
import './styles/Home.css';
import './styles/Tasks.css';
import './styles/Profile.css';
import './styles/Backlog.css';
import { Developer, Challenge } from './types';

const App: React.FC = () => {
  const [developer, setDeveloper] = useState<Developer>({ name: 'Ido Heffer', rank: 15, progress: 45 });
  const [challenges, setTasks] = useState<Challenge[]>([
    { id: 1, name: 'Remove secret from code', impact: 3, urgency: 2, volume: 5, rank: 6 },
    { id: 2, name: 'Disable Local Authentication for Storage accounts', impact: 3, urgency: 2, volume: 5, rank: 1 },
    { id: 3, name: 'Fix vulnerabilities on vms', impact: 3, urgency: 2, volume: 5, rank: 4 },
    // Add more tasks here
  ]);

  useEffect(() => {
    // Fetch developer data and tasks from API
  }, []);

  return (
    <Router>
      <Navbar />
      <Badge developer={developer} />
      <Sidebar challenges={challenges} />
      <div style={{ marginLeft: 250, padding: 20 }}>
          <Routes>
            <Route path="/" element={<Home developer={developer} challenges={challenges}/>} />
            <Route path="/tasks" element={<Tasks/>} />
            {/* Pass developer as prop to Profile */}
            <Route path="/profile" element={<Profile developer={developer} />} />
            <Route path="/backlog" element={<Backlog/>} />
            <Route path="/performance" element={<Performance developer={developer}/>} />
            <Route path="/challengeOfTheDay" element={<ChallengeOfTheDay />} />
          </Routes>  
      </div>
    </Router>
  );
};

export default App;
