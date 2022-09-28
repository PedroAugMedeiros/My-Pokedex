import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import PokeDetailsCard from './components/PokeDetails/PokeDetailsCard'
import './index.css'

function App() {
  return (
    <div className="App w-full h-full bg-repeat bg-background-pokedex items-stretch">
      <Routes>
        <Route path="/" element={<Home
        />}>
          <Route path="/Home" element={<Home
          />}></Route>
        </Route>
        <Route path="/Details" element={<PokeDetailsCard
        />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
