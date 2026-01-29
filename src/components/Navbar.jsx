import { useState } from 'react'
import './Navbar.css'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand" onClick={() => scrollToSection('hero')}>
          <span className="brand-text">My Portfolio</span>
        </div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a onClick={() => scrollToSection('hero')} className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('skills')} className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('learning')} className="nav-link">
              Learning
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')} className="nav-link cta-button">
              Contact
            </a>
          </li>
          <li className="theme-toggle-wrapper">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
