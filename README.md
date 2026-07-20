# Ahmed Khaled — Portfolio Website

A premium, modern SaaS-style portfolio built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Navbar.jsx        sticky nav with smooth scroll
    Hero.jsx           two-column hero with laptop mockup + floating cards
    About.jsx          about section with floating stat cards
    Services.jsx       interactive service selector (hover/click to preview)
    ServiceCard.jsx     row item used inside Services
    Stats.jsx          statistics cards
    StatCard.jsx        reusable stat card
    Testimonials.jsx    fully built, currently commented out in App.jsx
    CTA.jsx            closing call-to-action
    Footer.jsx         contact footer
    SectionTitle.jsx    reusable section heading
    Button.jsx          reusable button (primary/secondary/ghost)
  App.jsx
  main.jsx
  index.css
```

## Enabling testimonials

Open `src/App.jsx` and uncomment:

```jsx
import Testimonials from './components/Testimonials.jsx'
// ...
<Testimonials />
```

## Design tokens

- Primary: `#16213E`
- Accent: `#315EFB`
- Background: `#FFFFFF`
- Secondary background: `#F8FAFC`
- Font: Plus Jakarta Sans
- Radius scale: 20–30px (`rounded-xl2` / `xl3` / `xl4` in `tailwind.config.js`)
