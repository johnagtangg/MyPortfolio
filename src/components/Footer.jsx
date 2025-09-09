import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>John Ray S. Subrastas</h3>
            <p>WordPress Web Developer | SEO Enthusiast | UI Designer</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/just-john-ray/" className="social-link" aria-label="LinkedIn">
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/johnagtangg/" className="social-link" aria-label="Instagram">
                <span>Instagram</span>
              </a>
              <a href="mailto:subrastas50@gmail.com" className="social-link" aria-label="Email">
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} John Ray Subrastas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
