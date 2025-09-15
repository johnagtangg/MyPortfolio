import './AutoScrollGallery.css'
import { useRef, useEffect } from 'react'

const images = [
  { src: '/Adsum Colour.png', alt: 'Adsum Colour Project', title: 'Adsum Colour' },
  { src: '/BelleSoul.png', alt: 'BelleSoul Project', title: 'BelleSoul' },
  { src: '/CARE.png', alt: 'CARE Project', title: 'CARE' },
  { src: '/SEQUOIA.png', alt: 'SEQUOIA Project', title: 'SEQUOIA' },
  { src: '/Sunstra.png', alt: 'Sunstra Project', title: 'Sunstra' },
  { src: '/TripTayo.png', alt: 'TripTayo Project', title: 'TripTayo' },
]


const AutoScrollGallery = () => {
  const scrollRef = useRef(null)

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current
    let animationFrameId
    let scrollAmount = 0.5 // px per frame

    function autoScroll() {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll)
    }
    animationFrameId = requestAnimationFrame(autoScroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="auto-scroll-gallery-section">
      <div className="container">
        <h2 className="section-title" style={{ color: '#fff' }}>Auto-Scrolling Gallery</h2>
        <div className="auto-scroll-gallery" ref={scrollRef}>
          {images.concat(images).map((img, idx) => (
            <div className="auto-scroll-gallery-item" key={idx}>
              <img src={img.src} alt={img.alt} className="auto-scroll-gallery-img" />
              <div className="auto-scroll-gallery-title">{img.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AutoScrollGallery
