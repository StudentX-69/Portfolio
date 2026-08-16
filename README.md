# Portfolio

React portfolio built with Vite.

## Local development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

The production site is generated in `dist/`. Deploy `dist/`, not the repository root. The source `index.html` points to `src/main.jsx` for Vite development, and browsers cannot load that JSX file directly in production.

## GitHub Pages

This repository includes `.github/workflows/deploy.yml`, which builds the app and deploys the generated `dist/` artifact.

In GitHub, set:

- Repository settings -> Pages -> Source: `GitHub Actions`
- Do not use `Deploy from a branch` for this Vite app

The app uses `base: "/Portfolio/"` in `vite.config.js`, which matches the GitHub Pages URL path for `StudentX-69/Portfolio`.
