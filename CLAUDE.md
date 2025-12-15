# Nine Lives Club - Claude Code Guide

## Project Overview

This is a minimal personal website built with Eleventy (11ty), a static site generator. The site features a clean, minimalist design with sections for projects, writing, inspiration, and a gallery.

## Tech Stack

- **Eleventy 2.0.1** - Static site generator
- **Nunjucks** - Templating engine
- **Markdown** - Content format
- **CSS** - Vanilla CSS (no frameworks)

## Setup & Development

```bash
# Install dependencies
npm install

# Start dev server with live reload
npm start
# Runs at http://localhost:8080

# Build for production
npm run build
# Outputs to _site/
```

## Project Structure

```
src/
├── _includes/
│   └── base.njk           # Main layout template
├── css/
│   └── style.css          # All styles (single file)
├── writing/
│   ├── writing.json       # Default frontmatter for all posts
│   ├── index.njk          # Writing listing page
│   └── *.md               # Individual blog posts
├── gallery/
│   ├── index.njk          # Gallery slideshow page
│   └── images/            # Image files (used by gallery, inspiration, homepage)
├── index.md               # Homepage
├── projects.md            # Projects page (single file with direct links)
├── about.md               # About page
└── inspiration.md         # Inspiration page (cards with images)
```

## Key Files

### Configuration

- **.eleventy.js** - Eleventy configuration
  - Sets up passthrough copy for CSS and images
  - Defines date filter with formats: "year", "month", or full date
  - Creates collection for writing (sorted newest first)
  - Sets input dir to `src/`, output to `_site/`

### Layout

- **src/_includes/base.njk** - Main layout template
  - Site title: "Nine Lives Club"
  - Navigation with active state detection
  - Footer with auto-updating year
  - All pages use this layout

### Styles

- **src/css/style.css** - Single stylesheet
  - CSS variables for theming (`:root` block)
  - Max width: 640px
  - System font stack
  - Mobile responsive breakpoint at 480px
  - Sections: navigation, typography, item lists, post content, inspiration cards, gallery slideshow, footer

## Content Management

### Adding a New Project

Edit `src/projects.md` and add a new `<li>` inside the `<ul class="item-list">`:

```html
<li>
  <a href="https://your-project-url.com">
    <span class="item-title">Project Name</span>
    <span class="item-meta">2025</span>
    <p class="item-description">Brief description of the project.</p>
  </a>
</li>
```

Projects link directly to external URLs (no subpages).

### Adding a New Writing Post

Create a new `.md` file in `src/writing/`:

```markdown
---
title: Post Title
date: 2024-03-15
---

Your post content here...
```

Posts are automatically sorted by date (newest first) and appear on `/writing/`.

### Adding Gallery Images

Edit `src/gallery/index.njk` and add a new slide inside `<div class="gallery-slides">`:

```html
<div class="gallery-slide">
  <img src="/gallery/images/yourimage.jpg" alt="Description">
  <p class="gallery-caption">Your caption here.</p>
</div>
```

The slideshow features:
- Prev/Next buttons
- Keyboard navigation (left/right arrow keys)
- Auto-calculated counter ("1 of N")
- Only the first slide should have `class="gallery-slide active"`, others just `class="gallery-slide"`

### Adding Inspiration Items

Edit `src/inspiration.md` and add a new item inside `<div class="inspiration-grid">`:

```html
<div class="inspiration-item">
  <a href="https://link-to-item.com">
    <img src="/gallery/images/image.jpg" alt="Title">
  </a>
  <div class="inspiration-info">
    <a href="https://link-to-item.com" class="inspiration-title">Title</a>
    <span class="inspiration-author">— Author</span>
    <p class="inspiration-description">Your description here.</p>
  </div>
</div>
```

Layout is horizontal cards: image on left, text on right. Stacks vertically on mobile.

## Common Tasks

### Customizing Site Info

- **Site title**: `src/_includes/base.njk`
- **Homepage**: `src/index.md`
- **About page**: `src/about.md`
- **Contact info**: `src/about.md` (bottom section)

### Styling Changes

All styles are in `src/css/style.css`. CSS variables are defined in `:root`:
- `--text` - Main text color
- `--text-muted` - Secondary text color
- `--bg` - Background color
- `--border` - Border color
- `--max-width` - Content width (640px)
- `--spacing` - Horizontal padding (1.5rem)

### Date Formatting

The Eleventy config provides a `date` filter with three formats:
- `{{ date | date("year") }}` - Just the year
- `{{ date | date("month") }}` - "MMM YYYY" (e.g., "Mar 2024")
- `{{ date | date }}` - Full date "MMM DD, YYYY"

## Important Notes

### Collections

- Only **Writing** uses an Eleventy collection (defined in `.eleventy.js`)
- **Projects** and **Inspiration** are single markdown files with HTML markup
- **Gallery** is a single Nunjucks file with JavaScript for slideshow

### Passthrough Copy

Files/folders copied directly to output without processing:
- `src/css/` → `_site/css/`
- `src/gallery/images/` → `_site/gallery/images/`

### Template Engine

- All `.md` files use Nunjucks for template processing (`markdownTemplateEngine: "njk"`)
- This allows using Nunjucks variables/filters in Markdown files

## Deployment

The `_site/` folder contains static HTML. Deploy to:
- **Netlify/Vercel**: Build command `npm run build`, publish dir `_site`
- **GitHub Pages**: Use GitHub Action to build and deploy
- **Any static host**: Upload `_site/` contents

## When Making Changes

1. **Adding new pages**: Create `.md` or `.njk` files in `src/`
2. **Modifying navigation**: Edit `src/_includes/base.njk` header section
3. **Style changes**: Edit `src/css/style.css`
4. **Layout changes**: Edit `src/_includes/base.njk`

## Gotchas

- Gallery slides: only the first slide should have `active` class
- Gallery counter auto-updates via JavaScript on page load
- Inspiration images are stored in `src/gallery/images/` (shared with gallery)
- Navigation active states use exact URL matching
- Date formatting requires valid JavaScript `Date()` parseable dates
- All content files need frontmatter with `layout: base.njk` (except where set by directory .json files)
