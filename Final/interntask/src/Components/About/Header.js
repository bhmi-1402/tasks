import { NavLink } from 'react-router-dom';
import { $CombinedState } from 'redux';
import './Header.css';
import user from './user.png';
import webSiteLogo from './websitelogo.png';

function Header() {
  const activeStyle = "selected";
  function hamburger()
  {
    document.getElementById("nav2").style="display:flex";
  }
  function hamburgerClose()
  {
    setTimeout(()=>{
      document.getElementById("nav2").style="display:none";
    },500 )
  }
  return (<div>
    <header class="header">
      <a href="#" class="logo"><img src={webSiteLogo} height="40rem" width="50rem" /></a>
      <nav>
        <ul>
          <li><NavLink to="home" className={({ isActive })=> isActive ? "selected" :""}>Home</NavLink></li>
          <li><NavLink to="journey" className={({ isActive })=> isActive ? "selected" :""}>Journey</NavLink></li>
          <li><NavLink to="team" className={({ isActive })=> isActive ? "selected" :""}>Team</NavLink></li>
          <li><NavLink to="store" className={({ isActive })=> isActive ? "selected" :""}>Store</NavLink></li>
          <li><NavLink to="Contact" className={({ isActive })=> isActive ? "selected" :""}>Contact</NavLink></li>
        </ul>
      </nav> 
      <div className='navResponsive' id='nav2'>
        <ul  onClick={hamburgerClose}>
          <li><NavLink to="home" className={({ isActive })=> isActive ? "selected" :""}>Home</NavLink></li>
          <li><NavLink to="journey" className={({ isActive })=> isActive ? "selected" :""}>Journey</NavLink></li>
          <li><NavLink to="team" className={({ isActive })=> isActive ? "selected" :""}>Team</NavLink></li>
          <li><NavLink to="store" className={({ isActive })=> isActive ? "selected" :""}>Store</NavLink></li>
          <li><NavLink to="Contact" className={({ isActive })=> isActive ? "selected" :""}>Contact</NavLink></li>
        </ul>
          {/* <button className='buttonNav' onClick={hamburgerClose}>Close</button> */}
      </div>
      <div class="xy">
        {/* <div class="fas"></div> */}
        <img class="user" src={user} />
        <h4 class="gagan">GAGAN</h4>
      </div>
      <i  class= "fa-solid fa-bars" id='hamburger' onClick={hamburger}></i>
    </header>
  </div>
  )
}

export default Header;