import { useTheme } from '../ThemeContext'
import './ThemeToggle.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div 
      className="theme-toggle" 
      onClick={toggleTheme}
      data-theme={theme}
      role="button"
      aria-label="Toggle theme"
    >
      <div className="theme-toggle-slider">
      </div>
    </div>
  )
}

export default ThemeToggle
