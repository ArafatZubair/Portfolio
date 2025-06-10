import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <Link to="/" style={{ margin: '10px', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px', color: 'white' }}>About</Link>
      <Link to="/projects" style={{ margin: '10px', color: 'white' }}>Projects</Link>
      <Link to="/contact" style={{ margin: '10px', color: 'white' }}>Contact</Link>
    </nav>
  );
}
