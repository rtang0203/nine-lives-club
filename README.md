# Personal Site

A minimal personal website built with [Eleventy](https://www.11ty.dev/).

## Setup

```bash
npm install
```

## Development

```bash
npm start
```

This starts a local server at `http://localhost:8080` with live reload.

## Build

```bash
npm run build
```

Outputs static files to `_site/` for deployment.

## Adding Content

### New project

Create a new `.md` file in `src/projects/`:

```markdown
---
title: Project Name
date: 2024-03-15
description: Brief description shown in the list.
---

Your project content here...
```

### New writing post

Create a new `.md` file in `src/writing/`:

```markdown
---
title: Post Title
date: 2024-03-15
---

Your post content here...
```

### Gallery images

1. Add images to `src/gallery/images/`
2. Reference them in `src/gallery/index.njk`:

```html
<img src="/gallery/images/yourimage.jpg" alt="Description">
```

### Inspiration

Edit `src/inspiration.md` directly to add books, articles, and links.

## Customization

- **Site title**: Edit `src/_includes/base.njk` (replace "Your Name")
- **Styles**: Edit `src/css/style.css`
- **Homepage**: Edit `src/index.md`
- **About**: Edit `src/about.md`

## Deployment

The `_site/` folder is static HTML—deploy it anywhere:

- **Netlify**: Connect your repo, set build command to `npm run build`, publish directory to `_site`
- **GitHub Pages**: Use a GitHub Action to build and deploy
- **Vercel**: Same as Netlify
- **Manual**: Just upload `_site/` contents to any web server

## Structure

```
src/
├── _includes/
│   └── base.njk        # Main layout template
├── css/
│   └── style.css       # Styles
├── projects/
│   ├── projects.json   # Default frontmatter for projects
│   ├── index.njk       # Projects list page
│   └── *.md            # Individual projects
├── writing/
│   ├── writing.json    # Default frontmatter for posts
│   ├── index.njk       # Writing list page
│   └── *.md            # Individual posts
├── gallery/
│   ├── index.njk       # Gallery page
│   └── images/         # Image files
├── index.md            # Homepage
├── about.md            # About page
└── inspiration.md      # Inspiration page
```
