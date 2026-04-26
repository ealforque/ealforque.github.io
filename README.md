# Personal Portfolio — Software Engineer

Premium, modern personal portfolio built with **Vue 3 + TypeScript + Tailwind CSS + Vite**.

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  assets/          # Global styles
  components/      # Reusable UI (nav, footer, backdrop, loader, page header)
  composables/     # useTheme, useCursor, useScrollReveal
  content/         # Portfolio data (profile, experience, projects, education)
  pages/           # Route-level views (Home, About, Experience, Education, Projects, Contact)
  router/          # vue-router config (lazy-loaded pages)
  App.vue
  main.ts
```

## Highlights

- Multi-page routing with smooth fade/slide page transitions.
- Animated gradient backdrop, subtle grid, and cursor spotlight.
- Custom soft cursor (auto-disabled on touch devices).
- Scroll-reveal composable using `IntersectionObserver`, staggered.
- Light + dark mode with system preference detection and persisted choice.
- Hero with parallax photo tilt + floating motion.
- Experience timeline, project modal detail view, and contact form (mailto).
- Fully responsive, keyboard accessible, reduced-motion friendly.

## Customize

Edit `src/content/portfolio.ts` to update profile, experience, education, and projects.
