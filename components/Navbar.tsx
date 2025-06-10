'use client';

import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = ['home', 'about', 'experience', 'skills', 'education', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // 60% of section in view
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting && id) {
          const links = document.querySelectorAll('.nav-link');
          links.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const targets = document.querySelectorAll('section[id]');
    targets.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav id="navbar" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <a href="#home">Aditya Keshri</a>
        </div>
        <div className="nav-menu" id="nav-menu">
          {sectionIds.map((id) => (
            <a key={id} href={`#${id}`} className="nav-link">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
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
