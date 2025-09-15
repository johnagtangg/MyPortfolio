import './Gallery.css'
import { useState } from 'react'

const defaultImages = [
  { src: '/Adsum Colour.png', alt: 'Adsum Colour Project', title: 'Adsum Colour' },
  { src: '/BelleSoul.png', alt: 'BelleSoul Project', title: 'BelleSoul' },
  { src: '/CARE.png', alt: 'CARE Project', title: 'CARE' },
  { src: '/SEQUOIA.png', alt: 'SEQUOIA Project', title: 'SEQUOIA' },
  { src: '/Sunstra.png', alt: 'Sunstra Project', title: 'Sunstra' },
  { src: '/TripTayo.png', alt: 'TripTayo Project', title: 'TripTayo' },
]

const Gallery = ({ images = defaultImages }) => {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title" style={{ color: '#fff' }}>Project Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="gallery-item"
              tabIndex={0}
              onClick={() => setSelected(img)}
              onKeyDown={e => (e.key === 'Enter' ? setSelected(img) : null)}
            >
              <img src={img.src} alt={img.alt} className="gallery-thumb" />
              <div className="gallery-title">{img.title}</div>
            </div>
          ))}
        </div>
        {selected && (
          <div className="gallery-modal" onClick={() => setSelected(null)}>
            <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
              <img src={selected.src} alt={selected.alt} className="gallery-modal-img" />
              <div className="gallery-modal-title">{selected.title}</div>
              <button className="gallery-modal-close" onClick={() => setSelected(null)}>&times;</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
