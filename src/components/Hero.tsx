function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
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
