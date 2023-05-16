import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home/HomePage';
import PageNotFound from './pages/errorPage/PageNotFound';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
