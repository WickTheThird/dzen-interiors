# D-Zen Interiors

Marketing website for **D-Zen Interiors**, a renovation and interior-finishing
("zugrav") business in Cluj-Napoca, Romania. A single-page, photography-led
site in Romanian with a calm, premium feel: the work does the talking, not
long blocks of copy.

Live domain: [dzeninteriors.ro](https://dzeninteriors.ro/)

## Tech stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS** for styling
- Hosted on **GitHub Pages** with a custom domain, deployed via GitHub Actions
- Romanian copy (`lang="ro"`), Cluj-Napoca local SEO

## Project layout

```
public/
  img/            Optimized WebP photos served by the site (+ og-image.jpg)
  CNAME           Custom domain (dzeninteriors.ro)
  robots.txt      Crawler rules + sitemap pointer
  sitemap.xml     Single-page sitemap
  404.html        Redirects unknown paths back to the root
src/
  content/
    site.ts       Single source of truth for all copy and image paths
  components/
    Nav.tsx
    Hero.tsx
    BeforeAfter.tsx   Drag-reveal before/after slider
    Projects.tsx
    About.tsx
    Instagram.tsx
    Contact.tsx
CONTENT.md        Editorial blueprint: copy, section order, image manifest
.github/workflows/deploy.yml   GitHub Pages build + deploy
```

## Editing content

All visible copy and image references live in [`src/content/site.ts`](src/content/site.ts),
which mirrors the editorial blueprint in [`CONTENT.md`](CONTENT.md). To change
text, headings, phone number, or social links, edit `site.ts`. Keep `CONTENT.md`
in sync so it stays the source of truth.

## Images

Source photos are optimized to WebP and committed under `public/img/`. The raw
originals are kept out of the repo (gitignored). To regenerate an optimized
copy from an original, use [`cwebp`](https://developers.google.com/speed/webp/docs/cwebp):

```sh
cwebp -quiet -q 80 -m 6 input.jpg -o public/img/output.webp
```

To swap any image on the site, drop a replacement into `public/img/` using the
same filename referenced in `site.ts`.

The social-share card `public/img/og-image.jpg` is a 1200x630 JPEG (JPEG rather
than WebP for broad compatibility across social platforms).

## Local development

```sh
npm install      # install dependencies
npm run dev      # start the dev server with HMR
npm run build    # type-check and build for production into dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes `dist/` to GitHub Pages.

First-time setup (repo admin, one time only):

1. In the repository, go to **Settings -> Pages**.
2. Under **Build and deployment -> Source**, choose **GitHub Actions**.
3. Point DNS for `dzeninteriors.ro` at GitHub Pages:
   - Apex `dzeninteriors.ro` -> four A records:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` -> CNAME `wickthethird.github.io`

The `public/CNAME` file applies the custom domain on every deploy automatically.

## SEO notes

On-page SEO is handled in [`index.html`](index.html): keyword-rich title and
meta description, Open Graph and Twitter cards, geo meta tags for Cluj-Napoca,
a canonical URL, and `HousePainter`/LocalBusiness JSON-LD structured data.

For local "zugrav Cluj" searches, the biggest off-site ranking lever is a
**Google Business Profile** with a name, address, and phone number that match
the structured data on this site. After deploying, submit
`https://dzeninteriors.ro/sitemap.xml` in Google Search Console.
