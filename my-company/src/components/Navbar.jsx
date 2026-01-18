import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav 
        style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            width: '100%',
            padding: '15px 0px',
            justifyContent: 'center',
            backgroundColor: 'blue',
            display: 'flex',
            gap: '20px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            zIndex: '1000'
        }}>

            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </nav>
    );
}

export default Navbar;