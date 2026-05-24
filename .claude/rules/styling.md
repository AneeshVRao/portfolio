# Styling Rules

## CSS Variables Only
Never use raw hex values or rgba() in component files.
Always reference a token from src/styles/tokens.css.

BAD:  color: #c0520a
GOOD: color: var(--accent)

BAD:  background: rgba(192, 82, 10, 0.1)
GOOD: background: var(--accent-light)

If the token doesn't exist, create it in tokens.css first.

## No Tailwind
This project uses plain CSS with design tokens.
Never introduce Tailwind utility classes (e.g. `className="flex items-center"`).
Use CSS classes defined in global.css instead.

## Dark Mode
Every new colour token must have a corresponding override in
[data-theme="dark"] and @media (prefers-color-scheme: dark).
