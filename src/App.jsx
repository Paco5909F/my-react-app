import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>Nosotros</h1>;
}

function Contact() {
  return <h1>Contacto</h1>;
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
