# Gefan Yang Homepage

Personal academic homepage for <https://gefanyang.github.io>, built with Astro and Tailwind CSS.

## Requirements

- Node.js 22.12.0 or newer
- npm

## Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/data/profile.ts` stores profile, SEO, asset, and social link metadata.
- `src/data/publications.ts` stores the publication list.
- `src/components/` contains the sidebar, homepage content, and publication components.
- `src/layouts/BaseLayout.astro` owns the document head, canonical URL, SEO metadata, and favicons.
- `src/styles/global.css` contains the Tailwind 4 entrypoint and site styles.
- `public/assets/` contains static images and files copied through to the deployed site.

## Deployment

GitHub Actions deploys `dist/` to GitHub Pages on pushes to `main`. The site is configured for the repository root at `https://gefanyang.github.io`, so no Astro `base` path is set.
