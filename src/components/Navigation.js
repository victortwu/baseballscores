import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navigation =()=> {

  const [dropLinks, setDropLinks] = useState(false)
  const hamburgerButton = useRef(null)

  const spinHamburger =()=> {
    hamburgerButton.current.style = dropLinks ? 'animation: spinX .5s' : 'animation: spinE .5s'
  }

  const toggleDropDown =()=> {
    console.log('toggleDropDown called')
    dropLinks ? setDropLinks(false) : setDropLinks(true)
  }

  const toggleNavClass = dropLinks ? 'dropMenu' : 'hideMenu'

  const home = <Link id='navLink' to='/'>Home</Link>
  const standings = <Link id='navLink' to='/standings'>Standings</Link>
  const scores = <Link id='navLink' to='/scores'>Scores</Link>

  return(
    <nav className='navBar'>
    <h1 className='appLogo'>ball game</h1>

      <div className='deskTopLinks'>
          
            <div>{home}</div>
            <div>{standings}</div>
            <div>{scores}</div>

      </div>

      <div className={toggleNavClass}>
        <ul className='links'>

          <li onClick=
          {
            ()=> {
              toggleDropDown()
              spinHamburger()
            }
          }>
            {home}
          </li>

          <li onClick=
          {
            ()=> {
              toggleDropDown()
              spinHamburger()
            }
          }>
            {standings}
          </li>

          <li onClick=
          {
            ()=> {
              toggleDropDown()
              spinHamburger()
            }
          }>
            {scores}
          </li>

        </ul>
      </div>

      <div ref={hamburgerButton} className='hamburger' onClick={()=> {
        toggleDropDown()
        spinHamburger()
      }}>
          {
            dropLinks ?
              <div id='xBurger'>
                <div id='xLine1'/>
                <div id='xLine2'/>
              </div>
            :  <>
              <div id='hamburgerLine'/>
              <div id='hamburgerLine'/>
              <div id='hamburgerLine'/>
              </>
          }
      </div>
    </nav>
  )
}

export default Navigation
