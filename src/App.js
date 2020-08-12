import React from 'react';
import './App.css'
import { Top } from './components/top-section/topsection.component';
// import { About, MoreAbout } from './components/about/about.component';
// import { Skills } from './components/skills/skills.component';
// import { Project } from './components/projects/projects.component';
import { Section } from './components/section/section.component';
// import { Section } from './components/section/section.component';
function App() {
  return (
    <div className='canvas'>
      <Top />
      <Section/>
      {/* <About />
      <Skills/>
      <Project />
      <MoreAbout/> */}
    </div>
  );
}

export default App;
