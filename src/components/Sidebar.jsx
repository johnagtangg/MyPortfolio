import './Sidebar.css'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <aside className={`sidebar${open ? ' open' : ''}`}>
      <button className="sidebar-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle sidebar">
        <span className="sidebar-toggle-bar"></span>
        <span className="sidebar-toggle-bar"></span>
        <span className="sidebar-toggle-bar"></span>
      </button>
      <nav className="sidebar-nav">
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
