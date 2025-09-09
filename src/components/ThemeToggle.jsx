import { useTheme } from '../contexts/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          <span className="toggle-icon">
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle
