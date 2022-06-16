import React, { useContext } from 'react';
import './App.css';
import { BackgroundImageHeader } from './components/BackgroundImageHeader';
import { ExperienceList } from './Experience/ExperienceList';
import { Footer } from './components/Footer';
import { UserContext } from './globalContext';
import { SkillList } from './Skill/SkillList';
import { ProjectList } from './Project/ProjectList';
import { Overview } from './Overview/Overview';
import { AboutMe } from './AboutMe/AboutMe';

function App() {
  const user = useContext(UserContext);
  const skills: string[] = [];
  const experiences: string[] = [];
  const projects: string[] = [];

  return (
    <div className='main'>
      <BackgroundImageHeader></BackgroundImageHeader>
      <div className='main-body'>
        <Overview></Overview>
        <AboutMe></AboutMe>
        <SkillList skills={skills}></SkillList>
        <ExperienceList></ExperienceList>
        <ProjectList></ProjectList>
      </div>
      <Footer></Footer>

    </div >
  );
}

export default App;
