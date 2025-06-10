"use client"
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';
import Education from '../../components/Education';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { initScrollAnimations } from '../../utils/scrollAnimations';
import { useEffect } from 'react';
import { initSmoothScrolling } from '../../utils/smoothScroll';

export default function Home() {

  useEffect(() => {
    initScrollAnimations();
    initSmoothScrolling();

  }, []);
  
  return (
    <div className='w-full'>
      <Head>
        <title>Aditya Keshri - Aerospace Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
