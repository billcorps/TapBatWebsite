import { mkdir, writeFile, cp } from "node:fs/promises";
import { config, base, escape, href } from "./config.mjs";
import { pages } from "../src/pages.mjs";
const out = new URL("../dist/", import.meta.url);
await mkdir(out, { recursive: true });
await cp(new URL("../public/", import.meta.url), out, { recursive: true });
await cp(
  new URL("../src/styles.css", import.meta.url),
  new URL("assets/styles.css", out),
);
const nav = (path, name, current, className = "") =>
  `<a class="${className}" href="${href(path)}"${path === current ? ' aria-current="page"' : ""}>${name}</a>`;
for (const page of pages) {
  const canonical = new URL(page.path, config.siteUrl).href;
  const document = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#101c2a">
<title>${escape(page.title)}</title><meta name="description" content="${escape(page.description)}">
<meta property="og:title" content="${escape(page.title)}"><meta property="og:description" content="${escape(page.description)}"><meta property="og:type" content="website"><meta property="og:url" content="${canonical}">
<meta property="og:image" content="${new URL("assets/tapbat-social.png", config.siteUrl).href}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="TapBat. Tap to flap. Hold to glide. Actual gameplay in moonlit ruins with vine-covered columns.">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${new URL("assets/tapbat-social.png", config.siteUrl).href}"><meta name="twitter:image:alt" content="TapBat, with actual gameplay from the Android development build.">
<link rel="canonical" href="${canonical}"><link rel="icon" type="image/svg+xml" href="${href("assets/favicon.svg")}">
<link rel="preload" href="${href("assets/dm-sans-latin.woff2")}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${href("assets/styles.css")}">
</head><body class="${page.className || ""}">
<a class="skip-link" href="#main">Skip to content</a>
<header class="header"><div class="shell header-inner">
<a class="wordmark" href="${href("")}" aria-label="TapBat home"><img src="${href("assets/favicon.svg")}" alt="" width="36" height="36">TapBat</a>
<nav aria-label="Main navigation">${nav("", "Home", page.path)}${nav("privacy/", "Privacy", page.path)}${nav("beta/", "Join the beta", page.path, "nav-cta")}</nav>
</div></header>
<main id="main" tabindex="-1">${page.content}</main>
<footer class="footer shell"><div><a class="wordmark" href="${href("")}" aria-label="TapBat home"><img src="${href("assets/favicon.svg")}" alt="" width="30" height="30">TapBat</a><p>A little bat. A wilder world.</p></div><nav aria-label="Footer navigation">${nav("", "Home", page.path)}${nav("privacy/", "Privacy policy", page.path)}${nav("beta/", "Beta signup", page.path)}</nav><p class="copyright">© ${new Date().getUTCFullYear()} ${escape(config.developerName)}</p></footer>
</body></html>`;
  const directory = new URL(page.path || "./", out);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), document);
}
await writeFile(
  new URL("404.html", out),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found · TapBat</title><link rel="stylesheet" href="${href("assets/styles.css")}"><link rel="icon" href="${href("assets/favicon.svg")}"></head><body><main class="shell simple-page"><p class="eyebrow">TAPBAT / 404</p><h1>A wrong turn<br>in the ruins.</h1><p>That page could not be found. Your next flight starts here.</p><a class="button" href="${href("")}">Back to home</a></main></body></html>`,
);
await writeFile(
  new URL("sitemap.xml", out),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((page) => `<url><loc>${new URL(page.path, config.siteUrl).href}</loc></url>`).join("")}</urlset>`,
);
await writeFile(
  new URL("robots.txt", out),
  `User-agent: *\nAllow: /\nSitemap: ${config.siteUrl}sitemap.xml\n`,
);
await writeFile(new URL(".preview.json", out), JSON.stringify({ base }));
console.log(`Built ${pages.length} pages for ${config.siteUrl}`);
