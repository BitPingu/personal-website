import { Moon, Sun } from 'lucide-react'
import './ThemeToggle.css'

type ThemePreference = 'light' | 'dark' | 'system'

type ThemeToggleProps = {
  theme: 'light' | 'dark'
  setPreference: (preference: ThemePreference) => void
}

function ThemeToggle({ theme, setPreference }: ThemeToggleProps) {
  // Determine which theme will be applied when clicked.
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setPreference(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      {theme === 'light' ? (
        <Moon size={18} strokeWidth={1.7} aria-hidden="true" />
      ) : (
        <Sun size={18} strokeWidth={1.7} aria-hidden="true" />
      )}
    </button>
  )
}

export default ThemeToggle
