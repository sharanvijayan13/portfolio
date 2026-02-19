export default function Projects() {
  const projects = [
    {
      title: 'Purple NICU',
      type: 'Website - Commercial',
      description: 'Healthcare website built with a clean, responsive UI to showcase neonatal care services and support families with clear, accessible information.',
      tech: 'Next.js • Tailwind CSS',
      link: 'https://purplenicu.com/'
    },
    {
      title: 'InkSigma',
      type: 'Web App - Commercial',
      description: 'Redesigned collaborative blogging platform focused on improved UX, performance, and editorial workflows for multi-tenant content publishing.',
      tech: 'Next.js • Express.js • Tailwind CSS • PostgreSQL',
      link: 'https://inksigma.com/'
    },
    {
      title: 'Shaflix',
      type: 'Web App - Personal',
      description: 'Mood-based movie discovery web app that enables users to explore and filter movies through an intuitive, responsive interface.',
      tech: 'Next.js • TypeScript • Tailwind CSS',
      link: 'https://shaflix-app.vercel.app/'
    },
    {
      title: 'BookYourCelebrity (Landing Page)',
      type: 'Website - Commercial',
      description: 'Responsive landing page for a celebrity booking platform designed to present services clearly and drive user engagement.',
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
