import './About.css'

const About = () => {
  return (
    <section id="about" className="about animated-section">
      {/* Background Animation Elements */}
      <div className="about-bg-animations">
        <div className="floating-code-block code-1">{'<div>'}</div>
        <div className="floating-code-block code-2">{'</>'}</div>
        <div className="floating-code-block code-3">{'{ }'}</div>
        <div className="floating-tech-icon tech-1">💻</div>
        <div className="floating-tech-icon tech-2">⚙️</div>
        <div className="floating-tech-icon tech-3">🎨</div>
        <div className="animated-line line-1"></div>
        <div className="animated-line line-2"></div>
        <div className="pulse-circle circle-1"></div>
        <div className="pulse-circle circle-2"></div>
        <div className="data-stream stream-1"></div>
        <div className="data-stream stream-2"></div>
      </div>
      
      <div className="container">
        <h2 className="section-title animated-title">
          <span className="title-word">About</span>
          <span className="title-word">Me</span>
        </h2>
        <div className="about-content animated-content">
          <div className="about-text slide-in-left full-width">
            <p className="animated-paragraph" style={{ color: '#ffffff' }}>
              I'm a passionate WordPress Web Developer with 4 years of experience in web development 
              and 2 years specializing in Figma design. I have a strong background in creating 
              user-friendly, responsive websites that deliver exceptional user experiences.
            </p>
            <p className="animated-paragraph" style={{ color: '#ffffff' }}>
              My expertise lies in WordPress development using modern page builders like Breakdance 
              and Elementor, combined with SEO optimization and brand consistency practices. I believe 
              in creating websites that not only look great but also perform exceptionally well.
            </p>
            <div className="education animated-card">
              <h3 style={{ color: '#E9C46A' }}>Education</h3>
              <p style={{ color: '#ffffff' }}><strong>BS in Information Technology</strong></p>
              <p style={{ color: '#ffffff' }}>Caraga State University</p>
            </div>
            <div className="experience animated-card">
              <h3 style={{ color: '#E9C46A' }}>Experience</h3>
              <ul>
                <li className="animated-list-item" style={{ color: '#ffffff' }}>4 years in Web Development</li>
                <li className="animated-list-item" style={{color: '#ffffff'}}>2 years in Figma Design</li>
                <li className="animated-list-item" style={{color: '#ffffff'}}>Specialist in WordPress, Breakdance & Elementor</li>
                <li className="animated-list-item" style={{color: '#ffffff'}}>SEO Optimization Expert</li>
                <li className="animated-list-item" style={{color: '#ffffff'}}>Brand Consistency Specialist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
