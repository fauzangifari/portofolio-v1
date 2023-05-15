import React from 'react';
import './about.css';
import Timeline from './Timeline';

const about = () => {
  return (
    <section className='about section' id='about'>
        <h2 className="section__title">About Me</h2>
        <h2 className="section__subtitle">So, Who I Am?</h2>

        <div className="about__container container grid">

            <div className="about__data">

                <p className="about__description">
                I am Muhammad Fauzan Gifari Dzul Fahmi or can be called Fauzan and currently I am a a college student majoring in Information Systems. I have been interested in the world of information technology since childhood and am excited to learn more about this field. I have a special interest in web programming. <br /> <br />
                I believe that information technology can help solve many problems in our world and provide many benefits to society. Therefore, my mission is to provide the best user experience and ensure that the website can effectively meet user needs. I believe that a good website can increase user trust, increase brand loyalty, and provide a positive user experience. <br /> <br />
                I am learning a lot about various aspects of information technology and enjoy participating in interesting and challenging IT projects. I seek to continuously expand my knowledge and skills in this field through online courses, certifications and internships. <br /> <br />
                I hope that after completing my studies, I can contribute to the field of information technology and help solve various problems faced by our society. Thank you for visiting my profile, and feel free to contact me if you have any questions.
                </p>

            </div>
            <Timeline />
        </div>
    </section>
  )
}

export default about
