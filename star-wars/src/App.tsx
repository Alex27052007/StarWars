// Import necessary components and dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import PlanetList from './components/PlanetList';
import CharacterList from './components/CharacterList';
import VehicleList from './components/VehicleList';
import starWarsLogo from './assets/Star_Wars_Logo.png'
import StarshipList from './components/StarshipList';
import FilmList from './components/FilmList';
import './App.css';


// Your existing App component
function App() {
  return (
    <Router>
      <>
        <div>
          {/* Star Wars Logo with Spinning Animation */}
          <img src={starWarsLogo} className="star-wars-logo" alt="Star Wars logo" />
        </div>
        <h1>Star Wars</h1>
        {/* Navigation Bar */}
        <nav className="nav">
          <ul className="nav-links">
          <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
          </ul>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/planets" element={<PlanetList />} />
          <Route path="/films" element={<FilmList />} />
          <Route path="/starships" element={<StarshipList />} />
          <Route path="/vehicles" element={<VehicleList />} />
          {/* <Route path="/characters/:name" element={<CharacterDetail />} /> */}
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/" element={<Navigate to="/characters" replace />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
