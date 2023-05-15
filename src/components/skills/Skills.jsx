import React from 'react'
import './skills.css';
import VideoEditor from './VideoEditor';
import WebDevelopment from './WebDevelopment';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className="section__title">Skills</h2>
        <h2 className="section__subtitle">My Technical Level</h2>

        <div className="skills__container container grid">
            <VideoEditor />
            <WebDevelopment />
        </div>
    </section>
    
  )
}

export default Skills
