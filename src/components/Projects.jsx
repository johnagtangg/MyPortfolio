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
              <img src="/SEQUOIA.png" alt="E-commerce Platform" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://sequoiatherapy.com/deep-tissue-massage/" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">WordPress</span>
              <h3 className="project-title">Sequoia Massage Therapy</h3>
              <p className="project-description">
                Sequoia Massage Therapy is a place where your mind, body, and spirit come together.
              </p>
              <div className="project-tech">
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">Breakdanace</span>
                <span className="tech-tag">SEO</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="/Sunstra.png" alt="Corporate Website" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://sunstra.com/" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">Wordpress</span>
              <h3 className="project-title">Sunstra</h3>
              <p className="project-description">
                Discover the benefits of clean, renewable energy with our range of expert solar services.
              </p>
              <div className="project-tech">
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">Breakdance</span>
                <span className="tech-tag">SEO</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="/BelleSoul.png" alt="Belle Soul Aesthetics" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://bellesoulaesthetics.com/" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">WordPress</span>
              <h3 className="project-title">BelleSoul Aesthetics</h3>
              <p className="project-description">
                Discover the art of natural beauty with our expert skincare treatments.
              </p>
              <div className="project-tech">
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">Breakdance</span>
                <span className="tech-tag">SEO</span>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="/Adsum Colour.png" alt="Adsum Colour" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://www.figma.com/proto/2ZdqNN7Bjhfz83JmZovnCf/Adsum-Colour?node-id=4056-189&p=f&t=Xu04v252rNIH9uri-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">UI/UX</span>
              <h3 className="project-title">Adsum Colour</h3>
              <p className="project-description">
                At Adsum Colour, we bring your vision to life with precision and passion. Experience a world where every stroke of the brush adds value and vibrancy to your property.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">UI/UX</span>
                <span className="tech-tag">Website</span>
                <span className="tech-tag">Prototyping</span>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="/TripTayo.png" alt="Trip Tayo" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://www.figma.com/proto/qkCm3gKlGxqv1LATBLVgAN/FSUU-Team?node-id=8-21&starting-point-node-id=8%3A21&t=yDnbHXjTOMDemdql-1" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">UI/UX</span>
              <h3 className="project-title">TripTayo Mobile Application</h3>
              <p className="project-description">
                High-converting landing page with A/B testing capabilities, lead generation forms, and analytics integration.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">UI/UX</span>
                <span className="tech-tag">Mobile</span>
                <span className="tech-tag">Prototyping</span>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card glass-card">
            <div className="project-image">
              <img src="/CARE.png" alt="Mobile App UI" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://www.figma.com/proto/UqlCLykxCrprxLPuWTjpuc/CARE---Mobile-App?node-id=43-6&p=f&t=noGpQqFS2yCJtOBG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=43%3A6" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">UI/UX</span>
              <h3 className="project-title">C.A.R.E.</h3>
              <p className="project-description">
                CARE (Childcare Availability and Referral System) is a mobile app that helps working parents find trusted babysitters and childcare providers nearby.
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
