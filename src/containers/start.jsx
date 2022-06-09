import React from 'react'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'

const Start = () => {
  return (
    <React.Fragment>
      <main className="container">
        <section className="section-home">
          <div className='container-section'>
            <h1 className="title" id="title">THOMAS BERNAL MORALES</h1>
            <div className="line-container">
              <div className="line-red"></div>
              <div className="line-red"></div>
            </div>
            <p className="description">
              web designer /
              markup engineer.
            </p>
          </div>
        </section>

        <Section1 />
        <Section2 />
        <Section3 />

      </main>
    </React.Fragment>
  )
}

export default Start
