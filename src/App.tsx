import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main className="page-container" id="top">
      <Hero />
      <Projects />
      <Contact />

      <a className="back-to-top" href="#top">
        ↑ Back to top
      </a>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Gavin Eugenio</span>
      </footer>
    </main>
  )
}

export default App
