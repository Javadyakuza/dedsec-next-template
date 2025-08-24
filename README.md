# Next Template with Pages Router + i18n + tailwindcss + lottie

This templates will bring you a simple ready to go next template with pages router, i18n, tailwindcss, lottie (Cli Tooling).

# Template Structure

Below the imported file ans folders and their structure and their use cases are demonstrated.

```
├── next-env.d.ts (auto gen, don't touch)
├── next-i18next.config.js (Recommended not to touch)
├── pages
│ ├── \_app.tsx (all pages wrapper, used for global css imports etc...)
│ ├── \_document.tsx (html structure, used i18 importing into the html)
│ ├── api (folder to keep the api route files (not actual handlers))
│ └── index.tsx (homepage, entry point of the website)
├── postcss.config.mjs (tailwindcss config, don't touch)
├── public (public assets)
│ └── locales
│ ├── en
│ │ └── common.json (save en equivalents here)
│ └── fa
│ └── common.json ( save fa equivalents here)
├── src
│ ├── app
│ │ └── globals.css (global css's obviously, don't touch the font generated font faces)
│ ├── components
│ │ ├── layout (folder to place layout components of your app)
│ │ └── ui (used for reusable components)
│ └── server
│ ├── controllers (api routes handling logics)
│ ├── middleware (auth modules)
│ ├── models (reuseable db or app models)
│ └── services
│ ├── core (Core services that run independently)
│ └── utils (helper functions for all the services)
├── tailwind.config.ts (tailwind config, touch only when nesseccary)
```

> This structure is not mandatory, you can change it as you wish.

# How to use

1. Clone the repo

```
git clone https://github.com/Javadyakuza/dedsec-next-template.git sample-project-name
```

2. Run `npm install`
3. Run `npm run dev`
