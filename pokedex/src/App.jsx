// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Trainers from './pages/Trainers';
import Pokemons from './pages/Pokemons';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pokemons" element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;