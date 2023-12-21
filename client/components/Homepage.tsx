function Homepage() {
  return (
    <>
      <header className="navigation">
        <a href="/" className="navigation-link">
          <div className="navigation-logo">Where Is My Item?</div>
        </a>
        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-item">About</li>
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
