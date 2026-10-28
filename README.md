# Aurum – Restaurant Showcase

A single-page showcase website for a modern fine-dining restaurant, built with Next.js (App Router), TypeScript and Tailwind CSS. The site content is in Polish and uses placeholder data meant to be replaced.

## Features

- Single-page layout with smooth-scrolling sections: hero, about, menu, reservation, contact
- Sticky header with responsive mobile navigation
- Accessible tabbed menu (categories: starters, mains, desserts)
- Reservation form with client-side validation and confirmation state
- Dark, elegant theme with serif typography (Cormorant Garamond + Inter)
- Fully responsive, respects `prefers-reduced-motion`

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- React
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the codebase
```

## Customization

- Restaurant name, contact details, opening hours and menu items live in [`lib/data.ts`](lib/data.ts).
- Colors and fonts are defined in [`app/globals.css`](app/globals.css) and [`app/layout.tsx`](app/layout.tsx).
- Page sections are in the [`components`](components) directory.

> Note: the reservation form currently only shows a confirmation message on the client. Connect it to a backend or an email service to receive real bookings.

## Deployment

The project is deployed on [Vercel](https://vercel.com/). Every push to the `master` branch triggers a production deployment.

## License

MIT
