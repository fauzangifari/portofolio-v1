import React from 'react'
import './about.css';

const Information = () => {
  return (
    <section className="design-section">
        <h3 className="section__title title">Education</h3>
        <div className="timeline">
          {}
          <div className="timeline-empty">
          </div>
          {}
          <div className="timeline-middle">
            <div className="timeline-circle" />
          </div>
          <div className="timeline-component timeline-content">
            <h3>2016 - 2019</h3>
            <p>Student At 1 Junior High School Samarinda</p>
          </div>
          <div className="timeline-component timeline-content">
            <h3>2019 - 2022</h3>
            <p>Student At 1 Senior High School Samarinda</p>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle" />
          </div>
          <div className="timeline-empty">
          </div>
          <div className="timeline-empty">
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle" />
          </div>
          <div className=" timeline-component timeline-content">
            <h3>2022 - Now</h3>
            <p>College Student At Mulawarman University</p>
          </div>
        </div>
      </section>
  )
}

export default Information
