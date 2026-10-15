import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectDetail from './components/ProjectDetail';
import portfolio from './data/portfolioData.json';

const { profile, skills, experience, projects, education } = portfolio;
const skillAccentClasses = [
  'text-[var(--palette-salmon-mid)]',
  'text-[var(--palette-green-mid)]',
  'text-[var(--palette-cyan-mid)]',
  'text-[var(--palette-violet-mid)]',
  'text-[var(--palette-gray-mid)]',
];

export default function App({ projectSlug }) {
  if (projectSlug) {
    const project = projects.find((item) => item.slug === projectSlug && item.caseStudy);

    if (project) return <ProjectDetail project={project} />;

    return (
      <div className="min-h-screen bg-[var(--palette-gray-soft)] px-6 pt-32 text-[#202124]">
        <Navbar homePath={import.meta.env.BASE_URL} />
        <main className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <a href={`${import.meta.env.BASE_URL}#projects`} className="mt-4 inline-block text-[var(--palette-green)] underline underline-offset-4">Return to projects</a>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Navbar />
      <main className="w-full">
        <Hero />
        <section id="about" className="scroll-mt-28 bg-white px-6 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--palette-salmon)]">About me</p>
              <h2 className="mt-3 text-3xl font-bold text-[#202124] sm:text-4xl">Mahmoud Zughbor</h2>
              <p className="mt-2 text-[#5f6368]">{profile.title} · 3+ years of experience · {profile.location}</p>
            </div>
            <div className="space-y-5 text-base leading-7 text-[#5f6368]">
              <p>
                I am a full-stack software engineer with 3+ years of experience building, deploying,
                and supporting web applications for businesses and product teams. I work across
                React and Next.js interfaces, Django and Node.js services, REST APIs, and Linux
                production environments, with a focus on maintainable systems and dependable delivery.
              </p>
              <p>
                At <a className="font-medium text-[#202124] underline decoration-[var(--palette-salmon)] underline-offset-4" href="https://falconofcodes.com/" target="_blank" rel="noreferrer">Falcon of Codes</a>, I develop React and Next.js applications,
                build Django features and APIs, and manage Linux deployment workflows. Previously,
                I delivered freelance Django and WordPress projects from client requirements through
                deployment and ongoing support, collaborating closely to turn business needs into
                practical technical solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-sm font-semibold">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[#202124] underline decoration-[var(--palette-salmon)] underline-offset-4">LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-[#202124] underline decoration-[var(--palette-green)] underline-offset-4">GitHub</a>
                <a href={`${import.meta.env.BASE_URL}mzughbor/Updated-mzughbor-Resume.docx.pdf`} download="Mahmoud-Zughbor-Resume.pdf" className="text-[#202124] underline decoration-[var(--palette-violet)] underline-offset-4">Download resume</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 bg-[var(--site-dark)] px-6 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--palette-green-mid)]">Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">From product UI to production server</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[var(--site-muted-on-dark)]">
              A practical toolkit for building product interfaces, backend services, and production systems.
            </p>
            <div className="mt-8 grid gap-x-10 md:grid-cols-2">
              {skills.map((group, index) => (
                <section key={group.category} className="border-t border-[var(--site-line-on-dark)] py-5">
                  <h3 className={`text-sm font-semibold ${skillAccentClasses[index % skillAccentClasses.length]}`}>{group.category}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label={group.category}>
                    {group.items.map((skill) => (
                      <li key={skill} className="rounded-full border border-[var(--site-line-on-dark)] bg-[var(--site-dark-surface)] px-3 py-1.5 text-sm text-white">{skill}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="scroll-mt-28 bg-[var(--palette-salmon-soft)] px-6 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.2fr_0.8fr]">
            <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[var(--palette-green)]">Experience</p>
              <h2 className="mt-3 text-3xl font-bold text-[#202124] sm:text-4xl">Work history</h2>
              <div className="mt-8">
                {experience.map((job) => (
                  <article key={`${job.company}-${job.period}`} className="border-t border-[#dadce0] py-6">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                      <h3 className="text-lg font-semibold text-[#202124]">{job.role}</h3>
                      <p className="text-sm text-[#5f6368]">{job.period}</p>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[var(--palette-green)]">
                      {job.url ? <a href={job.url} target="_blank" rel="noreferrer">{job.company}</a> : job.company}
                      <span className="font-normal text-[#5f6368]"> · {job.location}</span>
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f6368]">
                      {job.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--palette-violet)]">Education</p>
              <h2 className="mt-3 text-3xl font-bold text-[#202124] sm:text-4xl">Studies</h2>
              <div className="mt-8">
                {education.map((item) => (
                  <article key={item.institution} className="border-t border-[#dadce0] py-6">
                    <h3 className="text-lg font-semibold text-[#202124]">{item.qualification}</h3>
                    <p className="mt-2 text-sm font-medium text-[#3c4043]">{item.institution}</p>
                    <p className="mt-1 text-sm text-[#5f6368]">{item.location} · {item.period}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 bg-white px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--palette-cyan)]">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold text-[#202124] sm:text-4xl">Projects</h2>
            <div className="mt-8 grid gap-0 md:grid-cols-3 md:divide-x md:divide-[#dadce0]">
              {projects.map((project) => (
                <article key={project.id} className="border-t border-[#dadce0] py-6 md:px-6 md:first:pl-0 md:last:pr-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--palette-violet)]">{project.category}</p>
                  <h3 className="mt-3 text-xl font-bold text-[#202124]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f6368]">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                    {project.techStack.map((technology) => (
                      <li key={technology} className="rounded-full bg-[var(--palette-cyan-soft)] px-2.5 py-1 text-xs text-[#202124]">{technology}</li>
                    ))}
                  </ul>
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#202124] underline decoration-[var(--palette-salmon)] underline-offset-4">
                    Visit project <span className="sr-only">{project.title}</span>
                  </a>
                  {project.detailPath && (
                    <a href={`${import.meta.env.BASE_URL}${project.detailPath}`} className="mt-3 inline-flex text-sm font-semibold text-[var(--palette-green)] underline decoration-[var(--palette-salmon)] underline-offset-4">
                      Read case study <span className="sr-only">for {project.title}</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 bg-[var(--site-dark)] px-6 py-20 text-white sm:py-24">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--palette-salmon-mid)]">Contact</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let’s build something useful.</h2>
              <p className="mt-3 text-[var(--site-muted-on-dark)]">Available for web development opportunities and collaborations.</p>
            </div>
            <div className="flex flex-col items-start gap-3 text-sm">
              <a className="font-semibold text-[var(--palette-green-mid)] underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a>
              <a className="text-[var(--palette-cyan-mid)] underline underline-offset-4" href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
              <p className="text-[var(--site-muted-on-dark)]">{profile.location}</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[var(--palette-gray-soft)] px-6 pb-8 pt-5 text-center text-xs text-[#5f6368]">
        © {new Date().getFullYear()} Mahmoud Zughbor · mzughbor
      </footer>
    </div>
  );
}