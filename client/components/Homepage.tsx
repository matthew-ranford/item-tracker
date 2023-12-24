import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/homepage.css'
import { useState } from 'react'

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className={`navigation ${menuOpen ? 'menu-open' : ''}`}>
        <a href="/" className="navigation-link">
          <div className="navigation-logo">Where Is My Item?</div>
        </a>
        <div className="hamburger-menu" onClick={menuToggle}>
          <i className="fas fa-bars"></i>
        </div>
        <nav className={`nav ${menuOpen ? 'show-menu' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <span>
                <a href="/about">About</a>
              </span>
            </li>
            <li className="nav-item">
              <span>Items Lent</span>
            </li>
            <li className="nav-item">
              <span>Add Item</span>
            </li>
            <li className="nav-item">
              <span>Log In</span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Homepage
