import Navbar from './Navbar'

export default function ProjectDetail({ project }) {
    const detail = project.caseStudy
    const baseUrl = import.meta.env.BASE_URL
    const heroScreenshot = detail.screenshots[0]

    return (
        <div className="min-h-screen bg-[var(--food-canvas)] text-[var(--food-ink)]">
            <Navbar homePath={baseUrl} />
            <main className="pt-16">
                <section className="px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <a href={`${baseUrl}#projects`} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--food-muted)] transition-colors hover:text-[var(--food-green)]">
                            <span aria-hidden="true">←</span> All projects
                        </a>
                        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                            <div className="max-w-2xl">
                                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--food-green)]">
                                    <span className="size-2 rounded-full bg-[var(--food-orange)]" />
                                    Case study · {detail.year}
                                </p>
                                <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                                    {detail.title}
                                </h1>
                                <p className="mt-5 max-w-xl text-xl leading-8 text-[var(--food-muted)] sm:text-2xl sm:leading-9">
                                    {detail.headline}
                                </p>
                                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--food-green)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--food-green-dark)]">
                                        Open live demo <span className="ml-2" aria-hidden="true">↗</span>
                                    </a>
                                    <a href={project.repositoryLink} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[var(--food-ink)] underline decoration-[var(--food-orange)] decoration-2 underline-offset-4 hover:text-[var(--food-green)]">
                                        View source code <span aria-hidden="true">↗</span>
                                    </a>
                                </div>
                            </div>
                            <figure className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(32,33,36,0.12)]">
                                <img
                                    src={`${baseUrl}${heroScreenshot.src}`}
                                    alt={heroScreenshot.alt}
                                    width="1366"
                                    height="768"
                                    fetchPriority="high"
                                    className="aspect-video w-full object-cover"
                                />
                                <figcaption className="px-4 py-3 text-xs text-[var(--food-muted)] sm:px-5">
                                    {heroScreenshot.caption}
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--food-orange)]">Project overview</p>
                            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Built around a real service workflow</h2>
                        </div>
                        <div className="space-y-5 text-base leading-7 text-[var(--food-muted)] sm:text-lg sm:leading-8">
                            <p>{detail.summary}</p>
                            <p>{detail.overview}</p>
                            {project.originalConceptLink && (
                                <p>
                                    The starting point was a responsive <a href={project.originalConceptLink} target="_blank" rel="noreferrer" className="font-medium text-[var(--food-green)] underline decoration-[var(--food-orange)] underline-offset-4">OmniFood-inspired frontend concept</a>; this project extended it into a data-backed platform.
                                </p>
                            )}
                        </div>
                    </div>
                    <dl className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--food-line)] pt-6 sm:grid-cols-3">
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--food-muted)]">My role</dt>
                            <dd className="mt-2 text-sm font-semibold">{detail.role}</dd>
                        </div>
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--food-muted)]">Year</dt>
                            <dd className="mt-2 text-sm font-semibold">{detail.year}</dd>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--food-muted)]">Stack</dt>
                            <dd className="mt-2 text-sm font-semibold">Django · Python · Bootstrap</dd>
                        </div>
                    </dl>
                </section>

                <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--food-green)]">The problem</p>
                            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">One order, several teams</h2>
                        </div>
                        <div className="space-y-5 text-base leading-7 text-[var(--food-muted)] sm:text-lg sm:leading-8">
                            <p>{detail.challenge}</p>
                            <p>{detail.approach}</p>
                        </div>
                    </div>
                </section>

                <section className="bg-[var(--food-green-light)] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--food-green)]">How it works</p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">A clear handoff at every step</h2>
                        <ol className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
                            {detail.workflow.map((stage, index) => (
                                <li key={stage.step} className={`border-t-2 ${index === 1 ? 'border-[var(--food-orange)]' : 'border-[var(--food-green)]'} py-5 sm:pr-6 lg:min-h-52`}>
                                    <p className="text-xs font-bold text-[var(--food-muted)]">{stage.step}</p>
                                    <h3 className="mt-4 text-xl font-semibold">{stage.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-[var(--food-muted)]">{stage.description}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--food-orange)]">What it includes</p>
                            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Product capabilities</h2>
                        </div>
                        <ul className="divide-y divide-[var(--food-line)] border-y border-[var(--food-line)]">
                            {detail.features.map((feature, index) => (
                                <li key={feature} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 text-sm leading-6 text-[var(--food-muted)] sm:text-base">
                                    <span className={`font-semibold ${index % 2 === 0 ? 'text-[var(--food-green)]' : 'text-[var(--food-orange)]'}`}>{String(index + 1).padStart(2, '0')}</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--food-green)]">Interface snapshots</p>
                        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">The platform in use</h2>
                        <div className="mt-8 grid gap-x-6 gap-y-9 sm:grid-cols-2">
                            {detail.screenshots.slice(1).map((screenshot) => (
                                <figure key={screenshot.src} className="min-w-0">
                                    <img
                                        src={`${baseUrl}${screenshot.src}`}
                                        alt={screenshot.alt}
                                        loading="lazy"
                                        decoding="async"
                                        width="1366"
                                        height="768"
                                        className="aspect-video w-full rounded-xl bg-white object-cover shadow-[0_4px_16px_rgba(32,33,36,0.12)]"
                                    />
                                    <figcaption className="mt-3 text-sm font-medium text-[var(--food-muted)]">{screenshot.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-[var(--food-orange-light)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
                    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--food-orange)]">Explore the project</p>
                            <h2 className="mt-2 text-2xl font-semibold">See the running platform and implementation</h2>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a href={project.demoLink} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-[var(--food-green)] px-5 text-sm font-semibold text-white hover:bg-[var(--food-green-dark)]">Live demo ↗</a>
                            <a href={project.repositoryLink} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-[var(--food-line)] bg-white px-5 text-sm font-semibold text-[var(--food-ink)] hover:border-[var(--food-green)]">GitHub ↗</a>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="px-5 py-6 text-center text-xs text-[var(--food-muted)] sm:px-8">
                Mahmoud Zughbor · mzughbor · <a href={`${baseUrl}#projects`} className="underline decoration-[var(--food-orange)] underline-offset-4">Back to all projects</a>
            </footer>
        </div>
    )
}