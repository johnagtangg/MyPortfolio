import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ color: '#ffffff' }}>Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work and technical expertise</p>
        </div>
        
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="https://via.placeholder.com/400x250" alt="E-commerce Platform" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">WordPress</span>
              <h3 className="project-title">E-commerce Platform</h3>
              <p className="project-description">
                A full-featured e-commerce website built with WordPress and WooCommerce, featuring custom themes and advanced functionality.
              </p>
              <div className="project-tech">
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">WooCommerce</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">MySQL</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="https://via.placeholder.com/400x250" alt="Corporate Website" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">Web Design</span>
              <h3 className="project-title">Corporate Website</h3>
              <p className="project-description">
                Modern corporate website with responsive design, SEO optimization, and custom content management system.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">WordPress</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="https://via.placeholder.com/400x250" alt="Portfolio Website" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">UI/UX</span>
              <h3 className="project-title">Portfolio Website</h3>
              <p className="project-description">
                Creative portfolio website with interactive animations, modern UI/UX design, and optimized performance.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Vite</span>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="https://via.placeholder.com/400x250" alt="Blog Platform" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">CMS</span>
              <h3 className="project-title">Blog Platform</h3>
              <p className="project-description">
                Custom blog platform with advanced SEO features, social media integration, and content optimization tools.
              </p>
              <div className="project-tech">
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">SEO</span>
                <span className="tech-tag">Analytics</span>
                <span className="tech-tag">PHP</span>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="https://via.placeholder.com/400x250" alt="Landing Page" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">Marketing</span>
              <h3 className="project-title">Landing Page</h3>
              <p className="project-description">
                High-converting landing page with A/B testing capabilities, lead generation forms, and analytics integration.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Analytics</span>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="https://via.placeholder.com/400x250" alt="Mobile App UI" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">Mobile</span>
              <h3 className="project-title">Mobile App UI</h3>
              <p className="project-description">
                Modern mobile application UI design with intuitive user experience, responsive layouts, and smooth animations.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">UI/UX</span>
                <span className="tech-tag">Prototyping</span>
                <span className="tech-tag">Mobile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-cta">
          <p>Interested in working together?</p>
          <a href="#contact" className="btn btn-primary">
            Let's Create Something Amazing
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
