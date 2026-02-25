# Sanjana Jadhav — World‑class Personal Website (React + Vite)

A modern, high‑performance, single‑page portfolio built from Sanjana’s résumé:
- Beautiful dark/light theme
- Command palette (**Ctrl/⌘ + K**) for instant navigation
- Animated sections (respecting “reduced motion”)
- Case-study style project cards
- YouTube spotlight (privacy-friendly no‑cookie embed)
- Fully responsive, accessible, and SEO‑ready

---

## 1) Run locally

### Requirements
- **Node.js 18+**
- npm (comes with Node)

### Setup
```bash
# 1) Install dependencies
npm install

# 2) Run the dev server
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

### Production build (local)
```bash
npm run build
npm run preview
```

---

## 2) Update résumé content (easy)

All content is stored in one file:

- `src/data/profile.ts`

Update the text, add/remove projects, tweak tags, etc. The website will automatically reflect your changes.

---

## 3) Deploy for free (pick ONE)

This is a static site (`dist/`), so it can be hosted almost anywhere.

### Option A — Netlify (fastest)
1. Push this project to GitHub.
2. Go to Netlify → “Add new site” → “Import from Git”.
3. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy.

✅ You get a free `*.netlify.app` URL.

---

### Option B — Vercel
1. Push to GitHub.
2. Import on Vercel.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output: `dist`

✅ Free `*.vercel.app` URL.

---

### Option C — GitHub Pages (free)
GitHub Pages hosts from a repository and typically serves at:

`https://<username>.github.io/<repo>/`

#### Steps
1. Create a GitHub repo (example: `sanjana-portfolio`).
2. Push the code.
3. Add a GitHub Actions workflow (a ready one is included in `.github/workflows/deploy.yml`).
4. In GitHub repo settings → Pages → set source to **GitHub Actions**.
5. The workflow will build + publish.

> Important: For GitHub Pages, you must build with a base path.
> The included workflow sets `BASE_PATH=/<repo>/`.

---

## 4) Assets

- `public/og.png` — OpenGraph preview image
- `public/noise.png` — subtle background noise texture
- `public/sanjana-jadhav-resume.pdf` — résumé download (generated)

Replace these as you like.

---

## 5) Useful scripts

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — run eslint

---

## 6) Notes / Customization ideas (optional)
- Add a professional photo in `public/` and show it in `Hero.tsx`.
- Add GitHub link and featured repositories.
- Add a “Blog” section powered by Markdown (still static).

Enjoy shipping. ✨
# website
