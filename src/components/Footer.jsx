import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Contact Me</h3>
          <p>Email: waleedshahid43@gmail.com</p>
          <p>Phone: +923180499968</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Address</h3>
          <p>Islamabad, Pakistan</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Follow Me</h3>
          <p>
            <a href="https://linkedin.com/in/waleed-shahid-a24a27156" target="_blank" rel="noopener noreferrer" className="footer-link">Linkedin</a> | 
            <a href="https://github.com/waleed3298" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          </p>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 Waleed Shahid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;