'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <div className="logo">Sharan Vijayan</div>
      <nav>
        <ul id="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button 
        id="hamburgerBtn" 
        className="hamburger"
        onClick={() => {
          document.getElementById('mobileMenu')?.classList.add('slide-in')
          document.getElementById('overlay')?.classList.remove('hidden')
        }}
      >
        &#9776;
      </button>
    </header>
  )
}
