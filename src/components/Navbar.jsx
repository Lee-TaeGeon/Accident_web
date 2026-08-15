import { Link } from 'react-router'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          TRAFFIC ACCIDENT AI
        </Link>

        <nav className="navbar-menu">
          <Link to="/">HOME</Link>
          <Link to="/project">PROJECT</Link>
          <Link to="/experiments">EXPERIMENTS</Link>
          <Link to="/demo">DEMO</Link>
          <Link to="/results">RESULTS</Link>
          <Link to="/team">TEAM</Link>
        </nav>

      </div>
    </header>
  )
}

export default Navbar