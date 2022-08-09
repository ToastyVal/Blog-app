
import React from 'react';
import Blog from './routes/Blog';
import About from './routes/AboutUs';
import Content from './routes/ContentPolicy'
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contenPolicy' elemment={<Content />} />
      </Routes>
    </>

  );
}

export default App;
