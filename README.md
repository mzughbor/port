# Mahmoud Zughbor Portfolio

A React app built with Vite.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. Vite writes the static site to
`dist/`.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow that builds the app and
publishes `dist/` to GitHub Pages.

1. Push the project to a GitHub repository. The workflow runs on pushes to
   `main`; change the branch in `.github/workflows/deploy.yml` if your default
   branch has a different name.
2. In the repository, open **Settings → Pages** and set **Build and deployment
   → Source** to **GitHub Actions**.
3. Push a commit to `main` or manually run **Deploy to GitHub Pages** from the
   **Actions** tab.

### Use the custom domain `mzughbor.com`

The `public/CNAME` file configures the custom domain in each Pages deployment.
In Namecheap, open **Domain List → Manage → Advanced DNS** and add:

| Type | Host | Value |
| --- | --- | --- |
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `<github-username>.github.io` |

Replace `<github-username>` with the owner of the GitHub Pages site (no
repository name or protocol). Remove conflicting parking/redirect records for
`@` or `www`, but keep any email-related DNS records.

In the GitHub repository, open **Settings → Pages**, enter `mzughbor.com` in
**Custom domain**, and save. Keep the source set to **GitHub Actions**. Once the
DNS checks pass, enable **Enforce HTTPS** on that page. DNS changes can take
some time to propagate.

When `public/CNAME` exists, the Vite build uses `/` as its asset base so the
site works at the custom domain root. Without the CNAME file, project Pages
builds use `/<repository>/`; user or organization sites named
`<username>.github.io` use `/`.
