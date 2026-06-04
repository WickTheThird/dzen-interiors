# D-Zen Interiors - Content Blueprint

This file is the single source of truth for all website copy, section order,
and image placement. The site reads its content from `src/content/site.ts`,
which mirrors this document. **When you change copy here, update `site.ts` to
match** (or ask to wire up true markdown parsing so this file drives the build
directly).

Language: Romanian (primary), Cluj-Napoca audience.
Tone: calm, premium, human, trustworthy. Minimal text. Photography does the talking.

---

## Section order (homepage, single page)

1. Hero
2. Before / After (full-width transformation)
3. Selected Projects
4. About
5. Instagram feed
6. Contact

A homeowner does not buy paint. They buy the result. The design revolves around
transformation, not a list of services.

---

## 1. Hero

- Full-screen renovation photograph (dark, atmospheric).
- Logo: **D-ZEN INTERIORS**
- Eyebrow: `CLUJ-NAPOCA`
- Headline: `Renovări și finisaje interioare în Cluj-Napoca`
- Subline: `Transformăm spații rezidențiale și comerciale prin lucrări de
  calitate și atenție la detaliu.`
- Buttons:
  - Primary: `Vezi proiecte` → scrolls to Projects
  - Secondary: `Contact` → scrolls to Contact

## 2. Before / After

- Eyebrow: `TRANSFORMARE`
- Title: `Înainte și după`
- Two labeled panels side by side (Înainte / După). A drag-reveal slider
  needs the two photos shot from the identical camera position, which we
  don't have yet, so side-by-side is used instead.
- Caption: short, e.g. `Apartament, Cluj-Napoca - renovare și finisaje`

## 3. Selected Projects

- Eyebrow: `PORTOFOLIU`
- Title: `Proiecte selectate`
- Large cards, one big photo each. No clutter, no service checklists.

Projects (priority order):
1. `Renovare apartament` - `Finisaje complete, tâmplărie și iluminat`
2. `Amenajare dormitor` - `Vopsitorie decorativă și parchet`
3. `Finisaje living` - `Pregătire pereți, vopsitorie și finisaje`
4. `Amenajare balcon` - `Tapet decorativ și pardoseală`

## 4. About

- Eyebrow: `DESPRE`
- One photograph of the owner / a finished space.
- Paragraph: `D-Zen Interiors oferă servicii de renovare și finisaje interioare
  în județul Cluj, concentrându-se pe calitatea execuției, atenția la detaliu și
  o comunicare clară pe tot parcursul proiectului.`

## 5. Instagram

- Eyebrow: `URMĂREȘTE`
- Title: `Pe Instagram`
- Handle: `@dzen_interiors`
- Grid of 6 project photos (static, not a live feed).
- Link out to https://www.instagram.com/dzen_interiors/

---

## Image manifest

Source photos live in `images/` (WhatsApp originals). Web-optimized WebP
copies are generated into `public/img/` (via `cwebp -q 80 -m 6`) and
referenced from `site.ts`. To swap any slot, drop a replacement into
`public/img/` with the same filename.

| Slot | File in public/img | Source (images/) | Content |
|------|--------------------|------------------|---------|
| Hero | `hero.webp` | `...11.52.44 (1)` | White hallway, LED cove lighting, dark wood floor |
| Before | `ba-before.webp` | `before_and_after_main/...12.11.27` | Same wall raw: drywall, exposed wiring boxes at sconce height |
| After | `ba-after.webp` | `before_and_after_main/...11.52.45` | Same wall finished: brown accent, lit sconces, curtains, floor |
| Project 1 | `proj-apartament.webp` | `...11.52.44 (5)` | Bright room, large window, city view |
| Project 2 | `proj-dormitor.webp` | `...11.52.44 (2)` | Sage-green accent bedroom |
| Project 3 | `proj-living.webp` | `...11.52.45 (1)` | Living/dining with arc lamp |
| Project 4 | `proj-balcon.webp` | `...11.49.34 (6)` | Enclosed balcony, botanical wall, rattan chairs |
| About | `about.webp` | `...11.49.33` | Clean entry hallway, light wood |
| IG 1-6 | `ig-1..6.webp` | mixed | Hallway, room, living, terrace, parquet works, stone steps |

Skipped: phone-gallery/iOS screenshots with visible UI chrome
(`...11.49.34 (1)`, `...11.52.48 (3)`, `...11.52.48 (4)`, `...11.52.44`).

## 6. Contact

- Eyebrow: `CONTACT`
- Title: `Hai să discutăm proiectul tău`
- Large phone number (call-to-action). No contact form.
- Channels: Telefon, WhatsApp, Facebook, Instagram.
- Phone: `+40 743 226 628`
- Facebook: https://www.facebook.com/profile.php?id=61577879934515

---

## What we deliberately do NOT include

- No giant service cards / checklists (Painting ✓ Plastering ✓ ...).
- No contact form - locals call or message directly.
- No long descriptive paragraphs at the top of sections.
