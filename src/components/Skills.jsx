import './Skills.css'

const Skills = () => {
  const skills = [
    {
      name: "WordPress Development",
      tools: ["Breakdance", "Elementor"],
      level: "Expert",
      description: "Building custom WordPress websites with modern page builders",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
    },
    {
      name: "SEO Optimization",
      tools: ["On-page SEO", "Technical SEO"],
      level: "Intermediate",
      description: "Implementing SEO best practices for better search visibility",
      icon: "https://img.icons8.com/fluency/48/search.png"
    },
    {
      name: "UI/UX Design",
      tools: ["Figma", "Canva"],
      level: "Advanced",
      description: "Creating high-fidelity wireframes and user-centered designs",
      icon: "https://img.icons8.com/color/48/design.png"
    },
    {
      name: "Brand Consistency",
      tools: ["Style Guides", "Design Systems"],
      level: "Advanced",
      description: "Maintaining consistent brand identity across all platforms",
      icon: "https://img.icons8.com/color/48/trademark.png"
    },
    {
      name: "User Experience Design",
      tools: ["User Research", "Prototyping"],
      level: "Intermediate",
      description: "Designing intuitive and accessible user experiences",
      icon: "https://img.icons8.com/color/48/group.png"
    },
    {
      name: "E-commerce Development",
      tools: ["WooCommerce", "Payment Integration"],
      level: "Advanced",
      description: "Building robust online stores and payment systems",
      icon: "https://img.icons8.com/color/48/shopping-cart.png"
    }
  ]

  const toolsIWorkWith = [
    { name: "Canva", icon: "https://img.icons8.com/color/64/canva.png" },
    { name: "Figma", icon: "https://img.icons8.com/color/64/figma.png" },
    { name: "WordPress", icon: "https://img.icons8.com/color/64/wordpress.png" },
    { name: "WooCommerce", icon: "https://img.icons8.com/color/64/woocommerce.png" },
    { name: "Elementor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Breakdance", icon: "https://img.icons8.com/color/64/web-design.png" },
    { name: "Slack", icon: "https://img.icons8.com/color/64/slack-new.png" },
    { name: "Discord", icon: "https://img.icons8.com/color/64/discord-new-logo.png" }
  ]

  return (
    <section id="skills" className="skills animated-section">
      {/* Background Animation Elements */}
      <div className="skills-bg-animations">
        <div className="floating-skill-icon icon-1">
          <img src="https://img.icons8.com/color/24/lightning-bolt.png" alt="Lightning" />
        </div>
        <div className="floating-skill-icon icon-2">
          <img src="https://img.icons8.com/color/24/rocket.png" alt="Rocket" />
        </div>
        <div className="floating-skill-icon icon-3">
          <img src="https://img.icons8.com/color/24/light-on.png" alt="Idea" />
        </div>
        <div className="floating-skill-icon icon-4">
          <img src="https://img.icons8.com/color/24/star.png" alt="Star" />
        </div>
        <div className="animated-grid-line line-1"></div>
        <div className="animated-grid-line line-2"></div>
        <div className="animated-grid-line line-3"></div>
        <div className="skill-pulse-dot dot-1"></div>
        <div className="skill-pulse-dot dot-2"></div>
        <div className="skill-pulse-dot dot-3"></div>
        <div className="floating-code-snippet snippet-1">{"{ skills: 'advanced' }"}</div>
        <div className="floating-code-snippet snippet-2">{"<expertise />"}</div>
        <div className="animated-wave wave-1"></div>
        <div className="animated-wave wave-2"></div>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="title-word">Skills</span>
          <span className="title-word">&</span>
          <span className="title-word">Expertise</span>
        </div>
        
        <div className="skills-intro animated-content">
          <p className="animated-paragraph">
            Passionate about creating exceptional digital experiences through a combination of technical expertise and creative design.
          </p>
        </div>

        <div className="skills-grid animated-content">
          {skills.map((skill, index) => (
            <div key={index} className={`skill-card animated-skill-card card-${index + 1}`}>
              <div className="skill-header">
                <h3 className="animated-skill-title">{skill.name}</h3>
              </div>
              <p className="skill-description animated-skill-description">{skill.description}</p>
              <div className="skill-tools">
                {skill.tools.map((tool, toolIndex) => (
                  <span key={toolIndex} className="tool-tag animated-tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-stats animated-content">
          <div className="stat-item animated-stat">
            <div className="stat-number" data-target="50">100+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item animated-stat">
            <div className="stat-number" data-target="6">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item animated-stat">
            <div className="stat-number" data-target="98">50+</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Tools I Work With Section */}
      <div className="tools-section">
        <h3 className="tools-title">Tools I Work With</h3>
        <div className="tools-grid">
          {toolsIWorkWith.map((tool, index) => (
            <div key={index} className="tool-item">
              <img 
                src={tool.icon} 
                alt={tool.name}
                className="tool-icon"
                loading="lazy"
              />
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
