import React from 'react'
import Typical from 'react-typical'

const Data = () => {
  return (
    <div>
      <div className="home__data">
        <h1 className='home__title'> Fauzan Gifari
        </h1>
        <h3 className="home__subtitle">I'm a 
        
        <Typical 
          loop={Infinity}
          wrapper='b'
          steps={[
            ' Web Developer.',
            2000,
            ' Ordinary Guy.',
            2000,
            ' Editor.',
            2000,
            ' Gamer.',
            2000,
            ' Student.',
            2000,
            ' Programmer.',
            2000
          ]} />
        
        </h3>
        <p className='home__description'>I enjoy learning new things and exploring the world around me. I have an interest in the world of technology, and strive to constantly develop my skills and knowledge in this field. 
        I also enjoy sharing my experience and knowledge with others.</p>

        <a href="#about" className="button button--flex">About me</a>
      </div>
    </div>
  )
}

export default Data
