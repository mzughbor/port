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

For a project repository, the build automatically uses the repository name as
the site base path (for example, `https://<username>.github.io/<repository>/`).
For a user or organization site named `<username>.github.io`, it uses `/`.
