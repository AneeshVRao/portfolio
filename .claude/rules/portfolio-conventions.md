# 🛡️ Portfolio Coding Conventions & Rules

These rules apply to any changes or refactoring inside the [Aneesh Rao Portfolio](file:///d:/Projects/ML/portfolio) workspace.

---

## 🎨 1. Styling Design System (No TailwindCSS)

*   **Rule**: Do NOT use or install TailwindCSS. All styling must be written in **Vanilla CSS** inside stylesheet modules or core CSS files.
*   **Design Tokens**: Maintain and use the design tokens defined in [src/styles/tokens.css](file:///d:/Projects/ML/portfolio/src/styles/tokens.css). Refer to custom HSL color values and spacing variables (e.g. `--color-dark`, `--color-beige`, `--color-light`, `--transition-smooth`).
*   **Responsive Layout**: Use standard CSS Flexbox/Grid layouts with media queries tailored to the established mobile, tablet, and desktop breakpoints.

---

## 📦 2. SVG Icon Consolidation

*   **Rule**: Do NOT import individual lucide-react icons or write inline SVG blocks inside standard JSX components.
*   **Centralized Imports**: All custom icons must be imported from and registered in [src/components/ui/icons.tsx](file:///d:/Projects/ML/portfolio/src/components/ui/icons.tsx). If a new icon is required, add it to this file as a lightweight, custom React functional component and export it.

---

## 🌓 3. Curated Section Theme Alternation

*   **Rule**: The page layout must strictly alternate between themes to ensure visual readability:
    $$\text{Dark} \longrightarrow \text{Beige} \longrightarrow \text{Light} \longrightarrow \text{Beige} \longrightarrow \text{Light} \longrightarrow \text{Beige} \longrightarrow \text{Light} \longrightarrow \text{Beige} \longrightarrow \text{Dark}$$
*   **Mapping**:
    - **Hero & Contact/Footer**: Dark mode backgrounds (`--color-dark`).
    - **About, Experience, Projects, FAQ**: Beige backgrounds (`--color-beige`).
    - **Toolkit, Method, Certifications**: Light backgrounds (`--color-light`).
*   **Transitions**: Ensure that sections transition cleanly and section dividers use colors matching the adjacent zones.
