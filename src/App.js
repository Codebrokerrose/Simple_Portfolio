import React, { useRef } from 'react';
import './App.css';
import Main from "./components/main";
import Header from "./components/Header";
import Contact from "./components/contact";
import Section from "./components/section";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      {/* Sections with refs */}
      <div ref={homeRef} id="home-section">
        <Main />
      </div>
      <div ref={aboutRef} id="about-section">
        <Section />
      </div>
      <div ref={contactRef} id="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
