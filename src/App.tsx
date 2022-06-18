import React, { useContext } from 'react';
import './App.css';
import { BackgroundImageHeader } from './components/BackgroundImageHeader';
import { ExperienceList } from './Experience/ExperienceList';
import { Footer } from './components/Footer';
import { UserContext } from './globalContext';
import { SkillSection } from './Skill/SkillSection';
import { ProjectList } from './Project/ProjectList';
import { Overview } from './Overview/Overview';
import { AboutMe } from './AboutMe/AboutMe';
import { skills } from './global';


function App() {
  const user = useContext(UserContext);

  return (
    <div className='main'>
      <BackgroundImageHeader></BackgroundImageHeader>
      <div className='main-body'>
        <Overview></Overview>
        <AboutMe></AboutMe>
        <SkillSection skills={skills}></SkillSection>
        <ExperienceList></ExperienceList>
        <ProjectList></ProjectList>
      </div>
      <Footer></Footer>

    </div >
  );
}

export default App;
