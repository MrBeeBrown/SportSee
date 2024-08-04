import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/Header.js';
import Home from './components/Home';
import Profils from './components/Profils';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Profils/:id" element={<Profils />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
