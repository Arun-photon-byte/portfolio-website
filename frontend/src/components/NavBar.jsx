import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="top-nav" aria-label="Main navigation">
      <div className="brand">Northstar Studio</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}
