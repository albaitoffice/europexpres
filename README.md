# Europexpres — Corporate Website

Site corporativ pentru S.C. EUROPEXPRES S.R.L., Alba Iulia.

**Stack:** React 18 + Vite + Tailwind CSS + Framer Motion + React Router DOM

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output: `dist/` — ready for static hosting.

## Deploy to Cloudflare Pages

### Via Dashboard (recommended)

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/<your-org>/europexpres.git
   git push -u origin main
   ```

2. Go to [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/?to=/:account/pages).

3. Click **Create a Project** → **Connect to Git**.

4. Select the `europexpres` repo.

5. Configure build:
   | Setting | Value |
   |---------|-------|
   | Framework preset | **Vite** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | (leave blank — the repo root) |

6. Click **Save and Deploy**.

### Via Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy dist --project-name europexpres
```

## SPA Routing on Cloudflare

A `public/_redirects` file is included with:

```
/* /index.html 200
```

This ensures React Router works correctly on all direct URL visits.

## Project Structure

```
├── public/
│   └── _redirects          # Cloudflare SPA routing
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Glassmorphism nav + mobile menu
│   │   ├── Hero.jsx         # Animated hero section
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Services.jsx     # Servicii (4 divizii)
│   │   ├── About.jsx        # Despre Noi
│   │   └── Contact.jsx      # Contact form
│   ├── App.jsx              # Router setup
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind + brand tokens
├── brand-spec.md            # Brand color reference
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```
