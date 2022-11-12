import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Nav';
import Categories from './Components/categories';
import BooksList from './Components/Books';

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
