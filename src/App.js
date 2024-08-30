import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/Header.js';
import Home from './components/Home';
import Profils from './components/Profils';
import UserActivity from './components/UserActivity.js';
import UserSession from './components/UserSessions.js';
import UserPerformance from './components/UserPerformance.js';
import UserInfos from './components/UserInfos.js';

/**
 * A React functional component that serves as the main application entry point.
 * It configures client-side routing using React Router and renders the corresponding components based on the URL path.
 *
 * @return {JSX.Element} A JSX element representing the application with routing configuration.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Profils/:id" element={<Profils />} />
        <Route path="/user/:id" element={<UserInfos />} />
        <Route path="/user/:id/activity" element={<UserActivity />} />
        <Route path="/user/:id/average-sessions" element={<UserSession />} />
        <Route path="/user/:id/performance" element={<UserPerformance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
