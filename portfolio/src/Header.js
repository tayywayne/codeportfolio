import React from 'react';
import './layout.css'
import { Link } from 'react-router-dom';
// import pin from './images/pin.png'

function Header() {
  return (
    <header>
      <div className='head'>
        <div className='logo-name'>
          <Link to='/' className='home-link'>~TAYWAY</Link>
        </div>
        <div className='navigation'>
          <p><span>⚲</span>  Bellvue, Washington</p>
        </div>
      </div>
    </header>
  );
}

export default Header;