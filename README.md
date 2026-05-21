# Muhammed Althaf — MERN Stack Developer Portfolio

Premium 3D developer portfolio built with **React**, **Vite**, **Tailwind CSS**, **Three.js**, **React Three Fiber**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Customize content

Edit these files — no need to touch components:

| File | What to update |
|------|----------------|
| `src/data/siteConfig.js` | Name, email, social links, resume path, nav |
| `src/data/projects.js` | Project titles, descriptions, GitHub/live URLs, images |
| `src/data/skills.js` | Skill names and proficiency % |
| `src/data/timeline.js` | Journey milestones |
| `src/data/about.js` | About highlight cards |

**Resume:** Add your PDF as `public/resume.pdf` (the download button uses `/resume.pdf`).

**Project screenshots:** Replace SVGs in `public/projects/` or use PNG/WebP paths in `projects.js`.

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Framework preset: **Vite** — build: `npm run build`, output: `dist`.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

Add to `vite.config.js`:

```js
export default defineConfig({
  base: '/my-port-folio/',
  // ...
})
```

Then:

```bash
npm run build
npx gh-pages -d dist
```

Enable GitHub Pages from the `gh-pages` branch.

## Project structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, Loader, cursor, scroll bar
│   ├── sections/   # Hero, About, Skills, Projects, Journey, Contact
│   ├── three/      # R3F hero scene (lazy-loaded)
│   └── ui/         # Buttons, titles, tilt cards
├── data/           # All editable content
├── hooks/          # Media queries, mouse position
└── utils/          # className helper
public/
├── projects/       # Project images
└── resume.pdf      # (you add this)
```

## Tech stack

- React 19 + Vite 8
- Tailwind CSS 4
- Three.js + @react-three/fiber + @react-three/drei
- Framer Motion, GSAP (available for extensions), react-type-animation, react-icons

## License

Private portfolio — customize freely for your career.
