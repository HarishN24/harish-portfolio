# Harish Neelapala — Portfolio

A React + Tailwind portfolio site styled like a code editor / file explorer.

## How to run

1. Unzip this folder.
2. Open a terminal **inside the unzipped folder** (the one containing `package.json`).
3. Install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the URL it prints — usually `http://localhost:5173`.

## Project structure

```
my-portfolio/
├── index.html            # HTML entry point
├── package.json          # dependencies + scripts
├── vite.config.js        # Vite bundler config
├── tailwind.config.js    # Tailwind CSS config
├── postcss.config.js     # PostCSS config (required by Tailwind)
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # renders <Portfolio />
    ├── Portfolio.jsx      # the actual portfolio page (all your content)
    └── index.css          # Tailwind imports
```

## Build for deployment

```
npm run build
```

This creates a `dist/` folder with static files you can upload anywhere
(GitHub Pages, Netlify, Vercel, etc.).
