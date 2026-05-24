# Architecture Rules

## Data / UI Separation
Every section reads its content from a /src/data/*.ts file.
Components must not contain hardcoded copy, numbers, or URLs.

To update content: edit the data file only.
To add a section: create data file first, then component.

## Adding a New Section
1. Create src/data/my-section.ts with typed interface + exported array
2. Create src/components/MySection.tsx importing from data file
3. Add <MySection /> to App.tsx in the correct order
4. Add id="my-section" and aria-label="..." to the <section> element
5. Add the section to the navbar links array

## Component Rules
- Every <section> must have id and aria-label attributes
- Every <img> must have alt, width, height attributes
- Every icon-only <button> must have aria-label
- Every external <a> must have rel="noopener noreferrer"
- No inline styles for layout (only for dynamic values like animation delays)
