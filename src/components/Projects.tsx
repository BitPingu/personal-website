import { ExternalLink } from 'lucide-react'

type Project = {
  name: string
  description: string
  technologies: string[]
  github: string
  website?: string
}

const projects: Project[] = [
  {
    name: 'mundo',
    description:
      'A top-down 2D RPG featuring an original world, characters, exploration, and turn-based combat.',
    technologies: ['Unity', 'C#'],
    github: 'https://github.com/BitPingu/mundo',
  },
  {
    name: 'barkada',
    description:
      'A browser-based multiplayer social game inspired by Club Penguin, featuring real-time movement and player interactions.',
    technologies: ['React', 'TypeScript', 'Phaser', 'Colyseus'],
    github: 'https://github.com/BitPingu/barkada',
    website: 'https://barkada.onrender.com',
  },
  {
    name: 'pakinggan',
    description:
      'A music tracking application designed to build a profile of listening preferences and explore music discovery.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/BitPingu/pakinggan',
  },
  {
    name: 'ikigai',
    description:
      'A gamified productivity app that turns habits and personal goals into quests, with daily progress tracking and RPG-inspired progression.',
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Supabase'],
    github: 'https://github.com/BitPingu/ikigai',
  },
  {
    name: 'isekai',
    description:
      'An experimental top-down 2D game featuring procedurally generated worlds. A sandbox for exploring game mechanics, systems, and ideas for future RPG projects.',
    technologies: ['Unity', 'C#'],
    github: 'https://github.com/BitPingu/isekai',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects" aria-label="Projects">
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
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
                  Visit Website
                  <ExternalLink
                    size={13}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </a>
              )}

              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ExternalLink size={13} strokeWidth={1.7} aria-hidden="true" />
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
