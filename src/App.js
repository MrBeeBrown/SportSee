import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import './components/Header.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='location/:id' element={<Location />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
