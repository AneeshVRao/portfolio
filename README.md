# Aneesh Venkatesha Rao — Portfolio

> Live at **[aneesh.codes](https://aneesh.codes)**

Personal portfolio website built with Vite + React + TypeScript.
Deployed on GitHub Pages with a custom domain.

---

## Stack

| Layer       | Technology                                  |
|-------------|---------------------------------------------|
| Framework   | React 18 + TypeScript                       |
| Build       | Vite                                        |
| Animation   | Framer Motion                               |
| Styling     | Plain CSS with CSS custom properties        |
| Icons       | Lucide React                                |
| Testing     | Playwright (via test-portfolio.cjs)         |
| Deploy      | GitHub Pages · GitHub Actions               |
| Domain      | aneesh.codes (name.com)                     |

---

## Sections

- **Hero** — Animated photo blend, typewriter greeting, role badges, watermark
- **About** — Bio, stats, GitHub contribution heatmap
- **Technical Toolkit** — Skills grouped by category
- **Method** — Approach and philosophy
- **Certifications** — Infinite marquee of verified credentials
- **Projects** — Featured + standard grid with expand/collapse, GitHub redirect card
- **Experience** — Education and achievement timeline (NIT Warangal + DPS Doha)
- **FAQ** — Accordion
- **Contact** — EmailJS form, marquee footer

---

## Local Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → /dist
npm run preview    # preview production build
```

---

## Testing

```bash
# Start dev server first, then:
node test-portfolio.cjs
```

Playwright tests verify:
- Page title and navbar
- Hero section content
- About stats
- Projects expand/collapse (4 → 12 → 4)
- FAQ accordion
- Contact form submission

---

## Deployment

Push to `main` → GitHub Actions builds → deploys to `gh-pages` branch →
GitHub Pages serves at `aneesh.codes`.

```
main branch  →  npm run build  →  gh-pages branch  →  aneesh.codes
```

Environment variables required (add as GitHub Actions secrets):
```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

---

## Project Structure

```
src/
  components/     # One file per section + ui/ sub-folder for primitives
  data/           # All content lives here — edit data files, not components
  styles/         # tokens.css (design tokens) + global.css
  assets/         # Images, icons
public/           # Static files: CNAME, og-image, resume, robots.txt, sitemap
.github/
  workflows/
    deploy.yml    # Build + deploy to gh-pages on push to main
```

**To add a project:** edit `src/data/projects.ts` only — copy the template at the bottom.
**To update skills:** edit `src/data/skills.ts` only.
**To change colours:** edit `src/styles/tokens.css` only.

---

## License

MIT
