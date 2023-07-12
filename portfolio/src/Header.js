import React from 'react'
import './layout.css'

function Header() {
    return (
        <header className="body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5" href='/'>Home</a>
      <a className="mr-5" href='/projects'>Projects</a>
      <a className="mr-5" href='/about'>About</a>
      <a className="mr-5" href='/contact'>Contact</a>
    </nav>

  </div>
</header>
    )
}

export default Header
