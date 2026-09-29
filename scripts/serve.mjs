import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../dist/", import.meta.url));
const { base } = JSON.parse(
  await readFile(resolve(root, ".preview.json"), "utf8"),
);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "application/xml",
};
const port = Number(process.env.PORT || 4173);
createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    if (pathname === "/" && base !== "/") {
      response.writeHead(302, { Location: base });
      response.end();
      return;
    }
    if (!pathname.startsWith(base)) throw new Error("Not found");
    let path = resolve(root, pathname.slice(base.length) || ".");
    if (
      path !== root.replace(/[\\/]$/, "") &&
      !path.startsWith(root.endsWith(sep) ? root : root + sep)
    )
      throw new Error("Not found");
    const info = await stat(path);
    if (info.isDirectory()) {
      if (!pathname.endsWith("/")) {
        response.writeHead(301, { Location: `${url.pathname}/${url.search}` });
        response.end();
        return;
      }
      path = resolve(path, "index.html");
    }
    response.writeHead(200, {
      "Content-Type": types[extname(path)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(await readFile(path));
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(await readFile(resolve(root, "404.html")));
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`TapBat preview: http://127.0.0.1:${port}${base}`),
);
