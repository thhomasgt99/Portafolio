import React, { useContext } from 'react'
// import AppContext from '../context/AppContext'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'

const Start = () => {
  React.useEffect(() => {
    const node = document.querySelector('.container-section0')
    const line = document.querySelector('.line1')
    const observer = new IntersectionObserver((objeto) => {
      objeto.forEach(entry => {
        if (entry.isIntersecting) {
            node.classList.add('slide')
            line.style.background = '#FF4D5A'
        } else {
          line.style.background = '#ffffff'
        }
      })
    }, { threshold: 0.75 }
    )
    observer.observe(node)

    window.addEventListener('scroll', () => {
      const scrollable = window.scrollY
      if (scrollable >= 200 ) {
        window.scrollTo({
          top: 0,
          behavior: "instant"
        })
        const sectionDesplazandeTop = document.querySelector('.container-section0')
        const sectionDesplazandeBottom = document.querySelector('.section1')
        if (sectionDesplazandeTop.classList.contains('top')) {
        } else {
          sectionDesplazandeTop.classList.add('top')
          sectionDesplazandeBottom.classList.add('top2')
        }
      }
    })
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
