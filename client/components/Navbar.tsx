import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/navbar.css'
import { useState } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Signup'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function Navbar() {
  const authenticate = useAuth0()
  const user = authenticate.user

  const handleSignOut = () => {
    authenticate.logout()
    console.log('sign out')
  }

  const handleSignIn = () => {
    authenticate.loginWithRedirect()
    console.log('sign in')
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
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
            {/* <li className="nav-item" onClick={closeMenu}>
              <span>
                <a href="#about" className="link">
                  About
                </a>
              </span>
            </li> */}
            <li className="nav-item">
              <Link to={'/items'} className="link" onClick={closeMenu}>
                <span>Items Lent</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/items/add'} className="link" onClick={closeMenu}>
                <span>Add Item</span>
              </Link>
            </li>
            {/* <li className="nav-item" onClick={closeMenu}>
              <a href="#contact" className="link">
                <span>Contact</span>
              </a>
            </li> */}
            <li className="nav-item" onClick={closeMenu}>
              <IfNotAuthenticated>
                <span onClick={handleSignIn}>Log In</span>
              </IfNotAuthenticated>
              <IfAuthenticated>
                {user && (
                  <p className="signed-in" onClick={handleSignOut}>
                    Sign out: {user?.name}
                  </p>
                )}
              </IfAuthenticated>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar

// Look at NavLink
