# personal-portfolio-hub

Source for my personal site, [scsepeda.com](https://scsepeda.com/).

## Stack

- React + TypeScript, bundled with Vite
- Tailwind CSS with shadcn/ui components
- Express.js server for the contact form endpoint

## Editing content

All site content (summary, skills, experience, projects, education) lives in
`client/src/lib/portfolio-data.ts`.

## Running locally

```bash
npm install
npm run dev
```

`npm run build` produces the production bundle in `dist/`.
