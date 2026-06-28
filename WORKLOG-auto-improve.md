# WORKLOG — auto-improve/2026-06-28

Branch: `auto-improve/2026-06-28`
Gate: `npx @11ty/eleventy --dryrun` (note: v2.0.1 uses `--dryrun`, not `--dry-run`)

---

### fix: correct copyright year from 3026 to 2026

- **What:** Changed `© 3026` to `© 2026` in `src/_includes/base.njk` line 29.
- **Why:** Obvious typo — the footer displayed the year 3026 on every page of the site.
- **Files:** `src/_includes/base.njk`
- **Gate:** Baseline PASS → Post PASS (`[11ty] Wrote 0 files in 0.07 seconds`)
- **Commit:** `9d64d4e`

---

### fix: correct malformed mailto href in about.md

- **What:** Changed `mailto:rjscorcese@.com` to `mailto:rjscorcese@gmail.com` in `src/about.md` line 12.
- **Why:** The href was missing the domain (`@.com` instead of `@gmail.com`). The visible link text `rjscorcese@gmail.com` was correct — only the href was malformed, making the link non-functional.
- **Files:** `src/about.md`
- **Gate:** Baseline PASS → Post PASS (`[11ty] Wrote 0 files in 0.06 seconds`)
- **Commit:** `2947145`

---

### fix: correct image filename case to prevent 404s on Linux

- **What:**
  - `src/gallery/index.njk` line 25: `han.jpg` → `han.JPG` (on-disk name is `han.JPG`)
  - `src/inspiration.md` line 36: `America.jpg` → `america.jpg` (on-disk name is `america.jpg`)
- **Why:** macOS is case-insensitive so both references resolved locally, but Linux (Netlify) is case-sensitive and served 404s. On-disk filenames verified from `src/gallery/images/` directory listing.
- **Files:** `src/gallery/index.njk`, `src/inspiration.md`
- **Gate:** Baseline PASS → Post PASS (`[11ty] Wrote 0 files in 0.06 seconds`)
- **Commit:** `f454c3b`

---

## Suggested next steps (not auto-changed)

None identified for this project beyond the three fixes above.
