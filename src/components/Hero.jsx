import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Modern UI Elements */}
        <div className="ui-dots"></div>
        <div className="ui-progress"></div>
        <div className="ui-chart"></div>
        <div className="ui-notification"></div>
        <div className="ui-badge"></div>
        <div className="ui-spinner"></div>
        <div className="ui-wave"></div>
        <div className="ui-code-block"></div>
        <div className="ui-toggle"></div>
        <div className="ui-slider"></div>
        
        {/* Additional Animated Elements */}
        <div className="ui-floating-card ui-card-1"></div>
        <div className="ui-floating-card ui-card-2"></div>
        <div className="ui-floating-card ui-card-3"></div>
        <div className="ui-glow ui-glow-1"></div>
        <div className="ui-glow ui-glow-2"></div>
        <div className="ui-orb ui-orb-1"></div>
        <div className="ui-orb ui-orb-2"></div>
        <div className="ui-line ui-line-1"></div>
        <div className="ui-line ui-line-2"></div>
        <div className="ui-line ui-line-3"></div>
        <div className="ui-polygon ui-poly-1"></div>
        <div className="ui-polygon ui-poly-2"></div>
        <div className="ui-hexagon ui-hex-1"></div>
        <div className="ui-hexagon ui-hex-2"></div>
        <div className="ui-particle ui-particle-1"></div>
        <div className="ui-particle ui-particle-2"></div>
        <div className="ui-particle ui-particle-3"></div>
        <div className="ui-particle ui-particle-4"></div>
        <div className="ui-particle ui-particle-5"></div>
        
        {/* Additional Advanced UI Elements */}
        <div className="ui-data-visualization ui-data-1"></div>
        <div className="ui-data-visualization ui-data-2"></div>
        <div className="ui-network-node ui-node-1"></div>
        <div className="ui-network-node ui-node-2"></div>
        <div className="ui-network-node ui-node-3"></div>
        <div className="ui-hologram ui-holo-1"></div>
        <div className="ui-hologram ui-holo-2"></div>
        <div className="ui-energy-beam ui-beam-1"></div>
        <div className="ui-energy-beam ui-beam-2"></div>
        <div className="ui-geometric-shape ui-geo-1"></div>
        <div className="ui-geometric-shape ui-geo-2"></div>
        <div className="ui-geometric-shape ui-geo-3"></div>
        <div className="ui-radar-sweep ui-radar-1"></div>
        <div className="ui-matrix-rain ui-matrix-1"></div>
        <div className="ui-matrix-rain ui-matrix-2"></div>
        <div className="ui-circuit-trace ui-circuit-1"></div>
        <div className="ui-circuit-trace ui-circuit-2"></div>
        <div className="ui-digital-clock ui-clock-1"></div>
        <div className="ui-status-indicator ui-status-1"></div>
        <div className="ui-status-indicator ui-status-2"></div>
        <div className="ui-loading-bar ui-loading-1"></div>
        <div className="ui-pulse-ring ui-pulse-1"></div>
        <div className="ui-pulse-ring ui-pulse-2"></div>
        <div className="ui-neon-sign ui-neon-1"></div>
        <div className="ui-scan-line ui-scan-1"></div>
        <div className="ui-tech-frame ui-frame-1"></div>
        <div className="ui-cyber-grid ui-grid-1"></div>
        <div className="ui-quantum-dot ui-quantum-1"></div>
        <div className="ui-quantum-dot ui-quantum-2"></div>
        <div className="ui-waveform ui-wave-1"></div>
        <div className="ui-neural-link ui-neural-1"></div>
        <div className="ui-neural-link ui-neural-2"></div>
        
        <div className="hero-main">
          <div className="hero-content">
            <h1 className="hero-name animated-text">
              <span className="text-line">John Ray S. Subrastas</span>
            </h1>
            <p className="hero-tagline animated-tagline">
              <span className="tagline-word">WordPress</span>
              <span className="tagline-word">Web</span>
              <span className="tagline-word">Developer</span>
              <span className="separator">|</span>
              <span className="tagline-word">SEO</span>
              <span className="tagline-word">Enthusiast</span>
              <span className="separator">|</span>
              <span className="tagline-word">UI/UX</span>
              <span className="tagline-word">Designer</span>
            </p>
            <div className="hero-buttons animated-buttons">
              <a href="#projects" className="btn btn-primary hover-lift">
                <span>View Projects</span>
                <div className="btn-ripple"></div>
              </a>
              <a href="mailto:subrastas50@gmail.com" className="btn btn-secondary hover-lift">
                <span>Contact Me</span>
                <div className="btn-ripple"></div>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/profile.jpg"
              alt="John Ray S. Subrastas"
              className="profile-image animated-image"
            />
            <div className="image-glow-effect"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
