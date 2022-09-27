import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import PokeDetailsCard from './components/PokeDetails/PokeDetailsCard'


function App() {
  return (
    <div className="App">
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
