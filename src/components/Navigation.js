import { Link } from 'react-router-dom'
import '../App.css'

const Navigation =()=> {
  return(
    <nav className='navBar'>
      <ul className='links'>
        <li><Link id='navLink' to='/'>Home</Link></li>
        <li><Link id='navLink' to='/standings'>Standings</Link></li>
        <li><Link id='navLink' to='/scores'>Scores</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
