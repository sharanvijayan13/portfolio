export default function Projects() {
  const projects = [
    {
      title: 'Purple NICU',
      type: 'Website - Commercial',
      description: 'Official website for Purple Maternal and Childcare Pvt Ltd, designed to showcase the hospital\'s services, facilities, and neonatal care information through a clean and responsive interface.',
      tech: 'Next.js • Tailwind CSS',
      link: 'https://purplenicu.com/'
    },
    {
      title: 'InkSigma',
      type: 'Web App - Commercial',
      description: 'Collaborative blogging platform that allows writers and teams to create publications with dedicated subdomains, enabling structured content publishing and editorial workflows.',
      tech: 'Next.js • Express.js • Tailwind CSS • PostgreSQL',
      link: 'https://inksigma.com/'
    },
    {
      title: 'Shaflix',
      type: 'Web App - Personal',
      description: 'Letterboxd-inspired movie platform with mood-based film suggestions where users can discover, track, and organize their watched and favorite movies.',
      tech: 'Next.js • TypeScript • Tailwind CSS',
      link: 'https://shaflix-app.vercel.app/'
    },
    {
      title: 'BookYourCelebrity',
      type: 'Website - Commercial',
      description: 'Celebrity booking platform that helps clients discover and book artists for events through a network of agents and performers.',
      tech: 'HTML • CSS • JavaScript',
      link: 'https://bookyourcelebrity.com/'
    }
  ]

  return (
    <section id="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.title} className="card">
            <h3>{project.title}</h3>
            <p className="project-type">{project.type}</p>
            <p>{project.description}</p>
            <p className="project-tech">{project.tech}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
