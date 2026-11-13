import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <main className="page-container" id="top">
      <Hero />
      <Projects />

      <a className="back-to-top" href="#top" aria-label="Back to top">
        ↑ Back to top
      </a>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Gavin Eugenio</span>
      </footer>
    </main>
  )
}

export default App
