import ThemeToggle from './ThemeToggle'
import useTheme from '../hooks/useTheme'
import useListeningTrack from '../hooks/useListeningTrack'
import { Music2 } from 'lucide-react'

function Hero() {
  // Manage the visitor's theme preference.
  const { theme, setPreference } = useTheme()

  // Retrieve the user's latest listening activity.
  const { track, isLoading, error } = useListeningTrack()

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <ThemeToggle theme={theme} setPreference={setPreference} />

      <div className="hero-content">
        <div className="hero-intro">
          <h1 id="hero-heading">
            <span className="hero-greeting">~Hi!</span>
            <span className="hero-name">I'm Gavin.</span>
          </h1>

          <p className="hero-welcome">
            Welcome to my little corner of the internet.
          </p>

          <p className="hero-thanks">Thanks for stopping by :)</p>
        </div>

        <div className="hero-description">
          <p>I love making games and bringing ideas to life.</p>

          <p>
            I'm currently working on my own RPG called mundo.{' '}
            <a
              href="https://github.com/BitPingu/mundo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check it out!
            </a>
          </p>

          <p>To unwind, I enjoy watching anime and listening to music.</p>
        </div>

        {/* Display the user's current or most recently played track. */}
        <p className="hero-listening">
          {!isLoading && !error && track && (
            <a href={track.url} target="_blank" rel="noopener noreferrer">
              <Music2 size={14} strokeWidth={1.7} aria-hidden="true" />
              {track.nowPlaying ? 'Listening to' : 'Last listened to'}:{' '}
              {track.name} — {track.artist}
            </a>
          )}
        </p>

        <div className="hero-links">
          <a href="#work">
            See what I'm working on <span className="work-arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
