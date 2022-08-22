import React, { useContext } from 'react'
// import AppContext from '../context/AppContext'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'

const Start = () => {

  React.useEffect(() => {
    const node = document.querySelector('.container-section0')
    node.classList.add('slide')
    const imagen = document.querySelector('.section-home')
    const line = document.querySelector('.line1')
    const observer = new IntersectionObserver((event) => {
      const { isIntersecting } = event[0]
      if (isIntersecting) {
        line.style.background = '#FF4D5A'
      }else{
        line.style.background = '#ffffff'
      }

    },{threshold: '0.7'})
    observer.observe(imagen)
  }, [])

  return (
    <React.Fragment>
      <main className="container">
        <section className="section-home section-general">
          <div className='container-section container-section0'>
            <h1 className="title" id="title">THOMAS BERNAL MORALES</h1>
            <div className="line-container">
              <div className="line-red"></div>
              <div className="line-red"></div>
            </div>
            <p className="description">
              Desarrollador web /
              Fron-End.
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
