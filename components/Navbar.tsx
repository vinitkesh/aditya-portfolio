"use client"
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand"><a href="#home">Aditya Keshri</a></div>
        <div className="nav-menu" id="nav-menu">
          {['home', 'about', 'experience', 'skills', 'education', 'contact'].map(id => (
            <a key={id} href={`#${id}`} className="nav-link">{id.charAt(0).toUpperCase() + id.slice(1)}</a>
          ))}
        </div>
        <button id="nav-toggle" className="nav-toggle">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
