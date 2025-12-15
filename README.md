# Nine Lives Club

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

Edit `src/projects.md` and add a new list item:

```html
<li>
  <a href="https://your-project-url.com">
    <span class="item-title">Project Name</span>
    <span class="item-meta">2025</span>
    <p class="item-description">Brief description of the project.</p>
  </a>
</li>
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

Edit `src/gallery/index.njk` and add a new slide:

```html
<div class="gallery-slide">
  <img src="/gallery/images/yourimage.jpg" alt="Description">
  <p class="gallery-caption">Your caption here.</p>
</div>
```

The slideshow counter updates automatically.

### Inspiration

Edit `src/inspiration.md` and add a new item:

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

## Customization

- **Site title**: Edit `src/_includes/base.njk`
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
├── writing/
│   ├── writing.json    # Default frontmatter for posts
│   ├── index.njk       # Writing list page
│   └── *.md            # Individual posts
├── gallery/
│   ├── index.njk       # Gallery slideshow page
│   └── images/         # Image files
├── index.md            # Homepage
├── projects.md         # Projects page (direct links)
├── about.md            # About page
└── inspiration.md      # Inspiration page (cards with images)
```
