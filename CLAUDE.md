# CLAUDE.md — Aneesh Venkatesha Rao Portfolio

> This file is loaded automatically by Claude Code at the start of every session,
> and by Antigravity IDE's Claude Code integration via the shared `~/.claude/` config.
> Keep this file up to date as the project evolves.

---

## Project Overview

A personal portfolio website for **Aneesh Venkatesha Rao** — full-stack engineer and AI systems builder.

- **Stack:** Vite + React + TypeScript + Framer Motion
- **Deploy target:** GitHub Pages (`gh-pages` branch via GitHub Actions)
- **Design inspiration:** Editorial coach site aesthetic — warm burnt-orange palette, large display typography, blended hero photo, animated sections
- **Primary goal:** Showcase projects, skills, and availability for work/collaboration

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Playfair Display, DM Sans, Dancing Script (Google Fonts) |
| Styling | Plain CSS with CSS custom properties (no CSS-in-JS, no Tailwind) |
| Deploy | GitHub Pages via `peaceiris/actions-gh-pages` |

---

## Key Commands

```bash
npm run dev        # local dev server at localhost:5173
npm run build      # production build → /dist
npm run preview    # preview production build
```

---

## Project Structure

```
/src
  /assets/images         ← static images (hero photo, project screenshots)
  /components            ← one file per section + /ui sub-folder for primitives
  /data                  ← ALL editable content lives here (never hardcode copy in JSX)
  /styles                ← tokens.css (design tokens) + global.css (resets + base)
  App.tsx                ← section composition only, no logic
  main.tsx
```

---

## Core Architecture Rules

1. **Data / UI separation is strict.**
   - Every section reads from a `/src/data/*.ts` file.
   - Components contain zero hardcoded copy. All text, stats, URLs live in data files.
   - This means Claude can update content without touching JSX.

2. **Adding a new section:**
   ```
   1. Create src/data/my-section.ts with typed interface + export
   2. Create src/components/MySection.tsx that imports from data file
   3. Import and render in App.tsx in the desired order
   4. Add anchor id (e.g. id="my-section") for navbar smooth scroll
   ```

3. **Adding a new project** (most common task):
   - Edit ONLY `src/data/projects.ts`
   - Copy the commented template block at the bottom of that file
   - Set `featured: true` for large 2-col cards, `false` for small 3-col cards

4. **CSS variables only** — never use raw hex values in component files.
   Always reference `var(--token-name)` from `src/styles/tokens.css`.

5. **No inline styles for layout** — use CSS classes. Inline styles are only for
   dynamic values (e.g. animation delays, progress percentages).

---

## Hero Photo Blending

The hero photo uses a CSS `mask-image` radial gradient to dissolve edges into the dark background. There are no hard borders. The CSS lives in the `.hero-photo` rule in `Hero.css`.

- To adjust blend softness: change the `ellipse` percentages in `mask-image`
- To shift where the face sits: change `object-position` and the gradient center (`at X% Y%`)
- Never add `border`, `border-radius`, or `box-shadow` to the hero photo element

---

## Watermark

The background text overlay reads `ANEESH` (row 1) and `VENKATESHA RAO` (row 2).
It is purely decorative (`pointer-events: none`, `z-index: 2`), `opacity: 0.10`.

---

## Skills Data Source

Skills are sourced from two places:
1. `skills.sh` profile data (Azure AI, Azure Storage, frontend-design, find-skills,
   vercel-react-best-practices, web-design-guidelines)
2. `D:\Projects\Misc\everything-claude-code` (ECC) skills:
   Claude Code, MCP Servers, Anthropic SDK, Prompt Engineering,
   AI Agent Systems, Tool Use / Function Calling

All skills are typed in `src/data/skills.ts`. Category groupings:
`'AI & Cloud' | 'Frontend' | 'Backend' | 'DevOps & Tools'`

---

## Animation System

All scroll-triggered animations go through the `<FadeUp>` wrapper component
(`src/components/ui/FadeUp.tsx`). It uses Framer Motion's `useInView` with `once: true`.

```tsx
<FadeUp delay={0.1}>
  <MyComponent />
</FadeUp>
```

Use `delay` prop for staggered children. Standard values: `0`, `0.08`, `0.1`, `0.15`, `0.2`.

---

## Antigravity IDE Notes

This project is developed in Google Antigravity IDE with Claude Code as the coding agent.

- Skills from `D:\Projects\Misc\everything-claude-code` are installed via ECC's
  `install.sh --target antigravity typescript` into `.agent/` (see ECC ANTIGRAVITY-GUIDE.md)
- MCP servers configured in `~/.claude/` are available identically in Antigravity
- Gemini (Antigravity native) is used for planning phases;
  Claude Code (Opus/Sonnet) is used for implementation
- The `.agent/rules/` directory mirrors the rules in this CLAUDE.md for Antigravity's agent

### ECC Skill Mapping (`.agent/` directory)

```
.agent/
  rules/
    architecture.md     ← data-component separation rule
    styling.md          ← CSS variables only, no hardcoded hex
    naming.md           ← file and component naming conventions
  workflows/
    add-project.md      ← step-by-step for adding a new project
    deploy.md           ← build + push + verify GitHub Pages
  skills/
    frontend-design/    ← from anthropics/skills (skills.sh)
    vercel-react/       ← from vercel-labs/agent-skills
    web-design/         ← from vercel-labs/agent-skills
    azure-ai/           ← from microsoft/azure-skills
```

---

## What NOT to Do

- ❌ Do not install Tailwind — the project uses plain CSS with tokens
- ❌ Do not add a state management library (Redux, Zustand) — local React state only
- ❌ Do not hardcode copy in JSX components — always use data files
- ❌ Do not add `border` or `border-radius` to the hero photo element
- ❌ Do not change `mix-blend-mode` on hero photo without testing dark/light backgrounds
- ❌ Do not use raw hex colors in component CSS — only `var(--token-name)`
- ❌ Do not create new sections without a corresponding data file

---

## Deployment

Push to `main` → GitHub Actions runs `deploy.yml` → builds `/dist` → publishes to `gh-pages` branch.

GitHub Pages URL: `https://aneesh-venkatesha-rao.github.io/portfolio` (or custom domain if configured in repo Settings → Pages).

---

## Contact / Owner

**Aneesh Venkatesha Rao**
aneeshvrao2017@gmail.com
GitHub: github.com/AneeshVRao
