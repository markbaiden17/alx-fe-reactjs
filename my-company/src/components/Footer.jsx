function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      textAlign: 'center', 
      padding: '20px', 
      marginTop: '20px',
      position: 'fixed',
      bottom: '0',
      width: '100%' 
    }}>
      <p>&copy; 2026 My Company. All rights reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <a href="#" style={{ color: '#00bcd4', margin: '0 10px', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="#" style={{ color: '#00bcd4', margin: '0 10px', textDecoration: 'none' }}>Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;