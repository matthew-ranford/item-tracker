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
              <span>About</span>
            </li>
            <li className="nav-item">
              <Link to={'/items'} className="link">
                <span>Items Lent</span>
              </Link>
            </li>
            <li className="nav-item">
              <span>Add Item</span>
            </li>
            <li className="nav-item">
              <span>Contact</span>
            </li>
            <li className="nav-item">
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
