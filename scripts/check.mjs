import { readFile, stat } from "node:fs/promises";
import { config, base } from "./config.mjs";
const out = new URL("../dist/", import.meta.url);
const routes = ["", "privacy/", "beta/"];
let checked = 0;
for (const route of routes) {
  const html = await readFile(new URL(`${route}index.html`, out), "utf8");
  if ((html.match(/<h1[ >]/g) || []).length !== 1)
    throw new Error(`Expected one h1: ${route}`);
  if (
    !html.includes("<title>") ||
    !html.includes('name="description"') ||
    !html.includes('id="main"')
  )
    throw new Error(`Missing page essentials: ${route}`);
  const current = new URL(route, config.siteUrl);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = new URL(match[1].replaceAll("&amp;", "&"), current);
    if (url.origin !== current.origin || url.protocol !== "https:") continue;
    if (!url.pathname.startsWith(base))
      throw new Error(`Link escapes site base: ${url}`);
    let relative = url.pathname.slice(base.length);
    if (!relative || relative.endsWith("/")) relative += "index.html";
    await stat(new URL(relative, out));
    if (url.hash) {
      const target = await readFile(new URL(relative, out), "utf8");
      if (!target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`))
        throw new Error(`Missing anchor: ${url}`);
    }
    checked++;
  }
}
console.log(`Checked 3 pages and ${checked} local links, assets, and anchors.`);
