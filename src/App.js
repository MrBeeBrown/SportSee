import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/Header.js';
import Home from './components/Home';
import Profils from './components/Profils';
import JsonDataDisplay from './components/JsonDataDisplay.js';

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
        <Route path="/user/:id" element={<JsonDataDisplay endpoint={"user"} />} />
        <Route path="/user/:id/activity" element={<JsonDataDisplay endpoint="activity" />} />
        <Route path="/user/:id/average-sessions" element={<JsonDataDisplay endpoint={"averageSessions"} />} />
        <Route path="/user/:id/performance" element={<JsonDataDisplay endpoint={"performance"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
