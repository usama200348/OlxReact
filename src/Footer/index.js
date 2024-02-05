import './footer.css'
function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>OLX</h3>
            <p>About OLX</p>
            <p>Contact Us</p>
            <p>OLX for Businesses</p>
          </div>
          <div className="footer-section">
            <h3>Help & Support</h3>
            <p>Help</p>
            <p>Sitemap</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-section">
            <h3>Terms of Use</h3>
            <p>Privacy Policy</p>
            <p>Posting Policy</p>
            <p>OLX for Businesses</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 OLX</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;