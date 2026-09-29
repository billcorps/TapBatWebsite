import { readFile } from "node:fs/promises";
export const config = JSON.parse(
  await readFile(new URL("../site.config.json", import.meta.url), "utf8"),
);
const rawUrl = process.env.SITE_URL || config.siteUrl;
const site = new URL(rawUrl.endsWith("/") ? rawUrl : `${rawUrl}/`);
if (
  site.protocol !== "https:" ||
  site.search ||
  site.hash ||
  site.username ||
  site.password
)
  throw new Error(
    "SITE_URL must be a public HTTPS URL without credentials, query, or fragment.",
  );
if (!/^\/[A-Za-z0-9/_-]*$/.test(site.pathname))
  throw new Error("Use a simple repository path in SITE_URL.");
config.siteUrl = site.href;
export const base = site.pathname;
export const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
export const href = (path) => `${base}${path.replace(/^\//, "")}`;
export const betaReady = Object.values(config.beta).every(Boolean);
if (
  config.supportEmail &&
  !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(config.supportEmail)
)
  throw new Error("Set a valid supportEmail.");
for (const value of Object.values(config.beta).filter(Boolean)) {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password)
    throw new Error("Beta URLs must use HTTPS and have no credentials.");
}
