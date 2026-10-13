# Jorge Gil Garcia — Portfolio & CV

Personal portfolio and online CV of **Jorge Gil Garcia**, Full-Stack Developer specialized in Node.js and TypeScript, working on ERP and e-commerce software.

🌐 **Live site:** [jggcod.github.io/jorgegilgarcia](https://jggcod.github.io/jorgegilgarcia)
📄 **CV:** [jggcod.github.io/jorgegilgarcia/cv](https://jggcod.github.io/jorgegilgarcia/cv)
💼 **LinkedIn:** [jorge-gil-garcia](https://www.linkedin.com/in/jorge-gil-garcia-4152a6163/)

## About the project

A fast, static website with two pages:

- **Home**: summary, professional timeline and featured projects.
- **CV**: a complete résumé, designed to be printed or exported to PDF straight from the browser.

All content lives in a single data file, [`src/cv.json`](src/cv.json), which follows the [JSON Resume](https://jsonresume.org/schema) schema. Both pages are generated from it, so updating the CV means editing just one file.

## Tech stack

- **[Astro](https://astro.build)**: static site generation with zero JavaScript by default
- **TypeScript**: type-checked components and data
- **Tailwind CSS**: utility-first styling with dark mode support
- **GitHub Actions**: automatic build and deployment to GitHub Pages on every push

## Project structure

```text
src/
├── cv.json              # Single source of truth for all content
├── pages/
│   ├── index.astro      # Landing page
│   └── cv.astro         # Printable CV page
├── layouts/             # Page layouts
├── components/
│   ├── main_page/       # Landing page components
│   ├── cv_page/         # CV page sections
│   └── icons/           # SVG icons
└── helpers/             # Utilities
```

## Running locally

```sh
npm install
npm run dev       # http://localhost:4321/jorgegilgarcia
npm run build     # type check + production build in ./dist
npm run preview   # preview the production build
```

## Contact

📧 [jggcod@gmail.com](mailto:jggcod@gmail.com)
