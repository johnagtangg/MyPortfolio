import './Contact.css'

const Contact = () => {

  return (
    <section id="contact" className="contact animated-section">
      {/* Background Animation Elements */}
      <div className="contact-bg-animations">
        <div className="floating-message-icon icon-1">💬</div>
        <div className="floating-message-icon icon-2">📧</div>
        <div className="floating-message-icon icon-3">✉️</div>
        <div className="floating-message-icon icon-4">📞</div>
        <div className="animated-connection-line line-1"></div>
        <div className="animated-connection-line line-2"></div>
        <div className="animated-connection-line line-3"></div>
        <div className="contact-pulse-dot dot-1"></div>
        <div className="contact-pulse-dot dot-2"></div>
        <div className="contact-pulse-dot dot-3"></div>
        <div className="floating-form-element element-1">{"{ }"}</div>
        <div className="floating-form-element element-2">{"<form />"}</div>
        <div className="floating-form-element element-3">{"@"}</div>
        <div className="animated-signal signal-1"></div>
        <div className="animated-signal signal-2"></div>
        <div className="contact-sparkle sparkle-1">⭐</div>
        <div className="contact-sparkle sparkle-2">✨</div>
        <div className="contact-sparkle sparkle-3">💫</div>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="title-word">Let's</span>
          <span className="title-word">Work</span>
          <span className="title-word">Together</span>
        </div>
        
        <div className="contact-intro animated-content">
          <p className="animated-paragraph contact-subtitle">
            Have a project in mind? I'd love to help bring your ideas to life. 
            Let's create something amazing together.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info animated-content full-width">
            <div className="info-header animated-info-header">
              <h3>Get in Touch</h3>
              <div className="header-decoration"></div>
            </div>
            
            <div className="contact-items-grid">
              <div className="contact-item animated-contact-item item-1">
                <div className="contact-icon animated-contact-icon">
                  <span className="icon-bg">📧</span>
                </div>
                <div className="contact-details">
                  <h4 className="animated-detail-title">Email</h4>
                  <a href="mailto:subrastas50@gmail.com" className="animated-detail-link">
                    subrastas50@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item animated-contact-item item-2">
                <div className="contact-icon animated-contact-icon">
                  <span className="icon-bg">📍</span>
                </div>
                <div className="contact-details">
                  <h4 className="animated-detail-title">Location</h4>
                  <p className="animated-detail-text">Philippines</p>
                </div>
              </div>
              
              <div className="contact-item animated-contact-item item-3">
                <div className="contact-icon animated-contact-icon">
                  <span className="icon-bg">⏰</span>
                </div>
                <div className="contact-details">
                  <h4 className="animated-detail-title">Response Time</h4>
                  <p className="animated-detail-text">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer animated-content">
          <div className="footer-card">
            <h3 className="animated-footer-title">Ready to Start?</h3>
            <p className="animated-footer-text">
              Let's discuss your project and turn your vision into reality.
            </p>
            <div className="footer-stats">
              <div className="footer-stat animated-footer-stat">
                <span className="stat-number">24h</span>
                <span className="stat-label">Response Time</span>
              </div>
              <div className="footer-stat animated-footer-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="footer-stat animated-footer-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
