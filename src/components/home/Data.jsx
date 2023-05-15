import React from 'react'
import Typewriter from 'typewriter-effect';

const Data = () => {
  return (
    <div>
      <div className="home__data">
        <h1 className='home__title'> Fauzan Gifari
        </h1>
        <h3 className="home__subtitle text">
          <Typewriter
            options={{
            strings: ['Web Developer', 'Video Editor', 'Ordinary People', 'College Student'],
            autoStart: true,
            loop: true,
            }}
          />
        </h3>
        <p className='home__description'>I enjoy learning new things and exploring the world around me. I have an interest in the world of technology, and strive to constantly develop my skills and knowledge in this field. 
        I also enjoy sharing my experience and knowledge with others.</p>

        <a href="#about" className="button button--flex">About me</a>
      </div>
    </div>
  )
}

export default Data
