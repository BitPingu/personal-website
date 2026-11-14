import { useEffect, useRef, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemePreference = Theme | 'system'

// Get the visitor's saved preference, defaulting to system settings.
function getInitialPreference(): ThemePreference {
  try {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }
  } catch {
    // Fall back to the system preference if storage is unavailable.
  }

  return 'system'
}

// Get the current theme from the visitor's operating system.
function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function useTheme() {
  // Track the visitor's theme preference.
  const [preference, setPreference] =
    useState<ThemePreference>(getInitialPreference)

  // Track the operating system's current theme.
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme)

  // Track the transition timeout.
  const transitionTimeout = useRef<number | undefined>(undefined)

  // Listen for changes to the operating system's theme preference.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    // Update the system theme when the preference changes.
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)

    // Remove the listener when the component unmounts.
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Clean up the transition timeout when the component unmounts.
  useEffect(() => {
    return () => {
      window.clearTimeout(transitionTimeout.current)
      document.documentElement.classList.remove('theme-transition')
    }
  }, [])

  // Resolve the active theme based on the saved or system preference.
  const theme = preference === 'system' ? systemTheme : preference

  // Update the theme preference with a transition.
  function updatePreference(nextPreference: ThemePreference) {
    const root = document.documentElement

    // Clear any existing transition timeout.
    window.clearTimeout(transitionTimeout.current)

    // Enable transitions before changing the theme.
    root.classList.add('theme-transition')
    void root.offsetHeight

    // Apply the selected theme.
    if (nextPreference === 'system') {
      delete root.dataset.theme

      try {
        localStorage.removeItem('theme')
      } catch {
        // The system preference still applies if storage is unavailable.
      }
    } else {
      root.dataset.theme = nextPreference

      try {
        localStorage.setItem('theme', nextPreference)
      } catch {
        // The selected theme still applies for the current session.
      }
    }

    // Update React state.
    setPreference(nextPreference)

    // Remove the transition class after the animation.
    transitionTimeout.current = window.setTimeout(() => {
      root.classList.remove('theme-transition')
    }, 250)
  }

  return { theme, preference, setPreference: updatePreference }
}

export default useTheme
