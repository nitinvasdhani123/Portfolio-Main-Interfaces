import React, {useState , useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [state,setstate] = useState(0);
  const [cls,setcls] = useState('open');
  const [symbol, setsymbol] = useState('fa-solid fa-xmark')

  useEffect(()=>{
    function opendropdown()
    {
      cls === "open" ? setcls('null') : setcls('open');
      symbol === "fa-solid fa-xmark" ? setsymbol("fa-solid fa-bars") : setsymbol("fa-solid fa-xmark")
    }
    opendropdown();
  },[state])

  return (
    <div id='Navbar'>
      <h1>Portfolio</h1>
      <ul className='option'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="About">About Me</Link></li>
        <li><Link to="Skills">Skills</Link></li>
        <li><Link to="Projects">Projects</Link></li>
        <li><Link to="Contact">Contact Me</Link></li>
        {/* <li><a href='https://nitin-kumar-vasdhani-resume.netlify.app/'>Resume</a></li> */}
      </ul>
      <div className='toggle-button'>
        <i className={`${symbol}`} onClick={()=>{setstate(state+1)}}></i>
      </div>
      <div className={`dropdown ${cls}`}>
      <ul className='option1'>
        <li onClick={()=>{setcls(null)}}><Link to="/" onClick={()=>{setsymbol("fa-solid fa-bars")}}>Home</Link></li>
        <li onClick={()=>{setcls(null)}}><Link to="About" onClick={()=>{setsymbol("fa-solid fa-bars")}}>About Me</Link></li>
        <li onClick={()=>{setcls(null)}}><Link to="Skills" onClick={()=>{setsymbol("fa-solid fa-bars")}}>Skills</Link></li>
        <li onClick={()=>{setcls(null)}}><Link to="Projects" onClick={()=>{setsymbol("fa-solid fa-bars")}}>Projects</Link></li>
        <li onClick={()=>{setcls(null)}}><Link to="Contact" onClick={()=>{setsymbol("fa-solid fa-bars")}}>Contact Me</Link></li>
        {/* <li><a href='https://nitin-kumar-vasdhani-resume.netlify.app/'>Resume</a></li> */}
      </ul>
      </div>
    </div>
  )
}

export default Navbar
