# Gowshika M — Engineering Portfolio

Interactive Next.js portfolio positioned for **Software Engineering, Full-stack, Backend, and Applied AI/ML** placement roles.

## Experience design

- Interactive engineering profile with Software / Full-stack / Applied ML modes
- LegacyLens Fear Score concept demo with staged scan animation
- Filterable engineering case-study wall
- Interactive architecture/system maps on every project case study
- Case-study postmortems: problem → constraints → decisions/trade-offs → what changed → verified facts
- Interactive metrics console using only supplied project numbers
- Keyboard terminal easter egg (`~`) with `whoami`, `projects --list`, `skills`, `resume --download`, and more
- Responsive motion system with reduced-motion support
- Scroll progress, microinteractions, sticky project navigation, and next-project flow

## Honesty boundary

The LegacyLens Fear Score homepage interaction is explicitly labelled as a simulated portfolio demo. It does **not** claim to invoke the production LegacyLens engine. Architecture maps are portfolio-level visualisations built only from the supplied project facts. No unlisted achievement, user count, performance claim, scale claim, or metric has been invented.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Add real links before deployment

Edit `lib/site.ts`.

```ts
export const siteLinks = {
  email: "mailto:your-email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile",
};

export const projectLinks = {
  "legacylens-ai": {
    github: "https://github.com/...",
    live: "https://...",
  },
  // ...
};
```

Project GitHub / live-demo buttons are conditional: they are not rendered until a real URL is supplied, so the deployed site never contains fabricated links.

## Resume

Replace `public/gowshika-resume.txt` with the final resume/PDF when ready. If the filename changes, update the homepage and terminal download paths.

## Best next content upgrade

Add real screenshots for LegacyLens and DevConnect once available. Use actual product UI rather than generated mock screenshots; the system maps already provide the architecture layer without inventing visuals.
