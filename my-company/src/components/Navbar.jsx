import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '10px',
      backgroundColor: '#222',
      color: 'white',
      display: 'flex',              // ✅ Flex display
      justifyContent: 'center'     // ✅ Center the nav items horizontally
    }}>
      <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px', color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
