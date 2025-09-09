import './Hero.css'

const HeroSimple = () => {
  return (
    <section className="hero">
      <div style={{
        position: 'relative',
        zIndex: 1000,
        color: 'white',
        fontSize: '24px',
        textAlign: 'center',
        padding: '50px',
        background: 'rgba(0,0,0,0.8)',
        margin: '50px'
      }}>
        <h1>John Ray S. Subrastas</h1>
        <p>WordPress Web Developer | SEO Enthusiast | UI/UX Designer</p>
        <button style={{padding: '10px 20px', margin: '10px', background: '#0036AB', color: 'white', border: 'none', borderRadius: '5px'}}>
          View Projects
        </button>
        <button style={{padding: '10px 20px', margin: '10px', background: '#F5A623', color: 'white', border: 'none', borderRadius: '5px'}}>
          Contact Me
        </button>
      </div>
    </section>
  )
}

export default HeroSimple
