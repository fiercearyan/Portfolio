# Portfolio — Aryan Kumar Singh

Personal portfolio website of **Aryan Kumar Singh**, Backend Software Engineer at IBM India Software Labs (ex-Amadeus).

**Live:** [fiercearyan.github.io/Portfolio](https://fiercearyan.github.io/Portfolio/)

## About

A terminal-inspired, single-page portfolio showcasing my experience, skills, and projects — Java, Spring Boot, Scala, Go, distributed systems, and cloud-native engineering.

## Tech

- Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step
- Dark theme with `oklch` colors, JetBrains Mono + Inter typography
- SEO-ready: Open Graph, Twitter Cards, JSON-LD (`Person` schema), sitemap, robots.txt
- Hosted on GitHub Pages (served from repo root, `.nojekyll`)

## Structure

```
├── index.html                     # Single-page site
├── assets/
│   ├── css/style.css              # All styling
│   ├── js/script.js               # Copy-email button, scroll reveal
│   └── img/                       # Project tiles & profile photo
├── Aryan_Kumar_Singh_Resume.pdf   # Downloadable CV
├── sitemap.xml / robots.txt       # SEO
└── .nojekyll                      # Skip Jekyll on GitHub Pages
```

## Run locally

```bash
git clone https://github.com/fiercearyan/Portfolio.git
cd Portfolio
python3 -m http.server 8000   # then open http://localhost:8000
```

## Contact

- Email: [aryanksingh41@gmail.com](mailto:aryanksingh41@gmail.com)
- LinkedIn: [in/aryan-singh07](https://www.linkedin.com/in/aryan-singh07/)
- GitHub: [@fiercearyan](https://github.com/fiercearyan)
