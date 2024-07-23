import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


function App() {
  return (
    <main className='main'>
      <Header />
      <Home />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
