import React from 'react'
import './pageError.css';
import Typewriter from 'typewriter-effect';

const PageNotFound = () => {
  return (
    <section className='page404 section'>
        <h1 className="section__title">
            <Typewriter
                options={{
                strings: ['404, page not found.'],
                autoStart: true,
                loop: true,
                }} 
            />
        </h1>
        <h2 className="section__subtitle">Sorry, the page you're looking for doesn't exist.</h2>
        <a href="/" className="button button--flex">Back</a>
    </section>
  )
}

export default PageNotFound
