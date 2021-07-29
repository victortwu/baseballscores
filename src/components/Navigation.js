import { Link } from 'react-router-dom'
import '../App.css'

const Navigation =()=> {
  return(
    <nav className='navBar'>
      <ul className='links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/standings'>Standings</Link></li>
        <li><Link to='/scores'>Scores</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
