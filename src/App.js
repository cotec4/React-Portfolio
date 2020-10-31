// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './component/NavBar/NavBar.js';
import LeadContent from './component/LeadContent/LeadContent.js';
import AboutMe from "./component/AboutMe/AboutMe.js"
import Experience from './component/Experience/Experience';
import Education from './component/Education/Education';


function App() {
  return (
    <div id="root">
      <NavBar />
      <LeadContent />
      <AboutMe />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
