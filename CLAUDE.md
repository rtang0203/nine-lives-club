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
├── projects/
│   ├── projects.json      # Default frontmatter for all projects
│   ├── index.njk          # Projects listing page
│   └── *.md               # Individual project files
├── writing/
│   ├── writing.json       # Default frontmatter for all posts
│   ├── index.njk          # Writing listing page
│   └── *.md               # Individual blog posts
├── gallery/
│   ├── index.njk          # Gallery page
│   └── images/            # Image files
├── index.md               # Homepage
├── about.md               # About page
└── inspiration.md         # Inspiration page
```

## Key Files

### Configuration

- **.eleventy.js** - Eleventy configuration
  - Sets up passthrough copy for CSS and images
  - Defines date filter with formats: "year", "month", or full date
  - Creates collections for projects and writing (sorted newest first)
  - Sets input dir to `src/`, output to `_site/`

### Layout

- **src/_includes/base.njk** - Main layout template
  - Site title: "Nine Lives Club" (line 6)
  - Navigation with active state detection
  - Footer with auto-updating year
  - All pages use this layout unless specified

### Styles

- **src/css/style.css** - Single stylesheet
  - CSS variables for theming (lines 9-18)
  - Max width: 640px
  - System font stack
  - Mobile responsive breakpoint at 480px

## Content Management

### Adding a New Project

Create a new `.md` file in `src/projects/`:

```markdown
---
title: Project Name
date: 2024-03-15
description: Brief description shown in the list.
---

Your project content here in Markdown...
```

Projects are automatically sorted by date (newest first) and appear on `/projects/`.

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

### Gallery Images

1. Add images to `src/gallery/images/`
2. Reference in `src/gallery/index.njk`:
```html
<img src="/gallery/images/yourimage.jpg" alt="Description">
```

### Inspiration Page

Edit `src/inspiration.md` directly. Uses custom HTML markup with `.inspiration-section` and `.inspiration-list` classes.

## Common Tasks

### Customizing Site Info

- **Site title**: `src/_includes/base.njk` line 6 and line 13
- **Homepage intro**: `src/index.md`
- **About page**: `src/about.md`
- **Contact info**: `src/about.md` (bottom section)

### Styling Changes

All styles are in `src/css/style.css`. CSS variables are defined in `:root` (lines 9-18):
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

- **Projects** and **Writing** are Eleventy collections defined in `.eleventy.js`
- Both are auto-sorted by date (newest first)
- They automatically pick up any `.md` files in their respective directories

### Passthrough Copy

Files/folders copied directly to output without processing:
- `src/css/` → `_site/css/`
- `src/gallery/images/` → `_site/gallery/images/`

Add more in `.eleventy.js` if needed: `eleventyConfig.addPassthroughCopy("src/path")`

### Template Engine

- All `.md` files use Nunjucks for template processing (`markdownTemplateEngine: "njk"`)
- This allows using Nunjucks variables/filters in Markdown files

### Current State

The site currently has placeholder content:
- Homepage has "Your Name" placeholder
- Example project and post
- Placeholder inspiration links
- Two sample gallery images (cr7.png, thaiboy.jpeg)

## Deployment

The `_site/` folder contains static HTML. Deploy to:
- **Netlify/Vercel**: Build command `npm run build`, publish dir `_site`
- **GitHub Pages**: Use GitHub Action to build and deploy
- **Any static host**: Upload `_site/` contents

## When Making Changes

1. **Adding new pages**: Create `.md` or `.njk` files in `src/`
2. **Modifying navigation**: Edit `src/_includes/base.njk` header section
3. **Adding new collections**: Define in `.eleventy.js` (see examples for projects/writing)
4. **Style changes**: Edit `src/css/style.css`
5. **Layout changes**: Edit `src/_includes/base.njk`

## Gotchas

- Gallery images must be manually added to `src/gallery/index.njk` (not auto-generated)
- Navigation active states use exact URL matching
- Date formatting requires valid JavaScript `Date()` parseable dates
- All content files need frontmatter with `layout: base.njk` (except where set by directory .json files)
