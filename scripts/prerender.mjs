import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createServer } from 'vite'

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const portfolio = JSON.parse(await readFile(resolve('src/data/portfolioData.json'), 'utf8'))
  const markup = renderToString(createElement(App))
  const indexPath = resolve('dist/index.html')
  const html = await readFile(indexPath, 'utf8')
  const root = '<div id="root"></div>'

  if (!html.includes(root)) {
    throw new Error('Could not find the empty React root in dist/index.html')
  }

  await writeFile(indexPath, html.replace(root, `<div id="root">${markup}</div>`))

  for (const project of portfolio.projects.filter((item) => item.caseStudy)) {
    const projectMarkup = renderToString(createElement(App, { projectSlug: project.slug }))
    const projectDirectory = resolve('dist', project.detailPath)
    const projectIndex = resolve(projectDirectory, 'index.html')
    const detailUrl = `https://mzughbor.com/${project.detailPath}`
    const screenshotUrl = `https://mzughbor.com/${project.caseStudy.screenshots[0].src}`
    const title = `${project.caseStudy.title} | Project Case Study | Mahmoud Zughbor`
    const description = project.caseStudy.summary
    const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
    const schema = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.caseStudy.title,
      description,
      url: detailUrl,
      image: screenshotUrl,
      author: { '@id': 'https://mzughbor.com/#person' },
      keywords: project.techStack,
    }).replaceAll('<', '\\u003c')

    const pageHtml = html
      .replace(root, `<div id="root">${projectMarkup}</div>`)
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
      .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
      .replace(/<link rel="canonical" href="[^"]+"\s*\/>/, `<link rel="canonical" href="${detailUrl}" />`)
      .replace(/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
      .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
      .replace(/<meta\s+property="og:url"[^>]*\/>/, `<meta property="og:url" content="${detailUrl}" />`)
      .replace(/<meta\s+property="og:image"[\s\S]*?\/>/, `<meta property="og:image" content="${screenshotUrl}" />`)
      .replace('</head>', `<script type="application/ld+json">${schema}</script>\n  </head>`)

    await mkdir(projectDirectory, { recursive: true })
    await writeFile(projectIndex, pageHtml)
  }
} finally {
  await vite.close()
}