import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Testexd from './Component/Teste'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Testexd />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
