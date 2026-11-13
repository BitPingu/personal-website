type Project = {
  name: string
  category: string
  description: string
  technologies: string[]
  github: string
  website: string | null
}

const projects: Project[] = [
  {
    name: 'mundo',
    category: 'GAME DEVELOPMENT',
    description:
      'A top-down 2D RPG featuring an original world, characters, exploration, and turn-based combat.',
    technologies: ['Game Development', '2D', 'Turn-based Combat'],
    github: 'https://github.com/BitPingu/mundo',
    website: null,
  },
  {
    name: 'barkada',
    category: 'MULTIPLAYER GAME',
    description:
      'A browser-based multiplayer social game inspired by Club Penguin, featuring real-time movement and player interactions.',
    technologies: ['React', 'TypeScript', 'Phaser', 'Colyseus'],
    github: 'https://github.com/BitPingu/barkada',
    website: 'https://barkada.onrender.com',
  },
  {
    name: 'pakinggan',
    category: 'MUSIC APPLICATION',
    description:
      'A music tracking application designed to build a profile of listening preferences and explore music discovery.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/BitPingu/pakinggan',
    website: null,
  },
]

function Projects() {
  return (
    <section className="projects" id="work" aria-label="Projects">
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <p className="project-category">{project.category}</p>

            <h2>{project.name}</h2>

            <p className="project-description">{project.description}</p>

            <div className="project-links">
              {project.website && (
                <a
                  className="project-link"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website ↗
                </a>
              )}

              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub ↗
              </a>
            </div>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
