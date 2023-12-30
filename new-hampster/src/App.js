import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import About from './pages/About';

import Header from './components/Header';
import Footer from './components/Footer';

//layout would go inside the router-routes
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

    // <div className="container mx-auto bg-purple-200 rounded-xl shadow border p-8 m-10">
    //   <p className="text-3xl text-gray-700 font-bold mb-5">
    //     Welcome!
    //   </p>
    //   <p className="text-gray-500 text-lg">
    //     React and Tailwind CSS in action
    //   </p>
    // </div>
  );
}

export default App;
