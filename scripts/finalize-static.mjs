/**
 * After `next build` (output: export), copy `out` → `html` and write host redirects.
 * Usage: node scripts/finalize-static.mjs
 */
import fs from "fs";
import path from "path";

const root = process.cwd();
const outDir = path.join(root, "out");
const htmlDir = path.join(root, "html");

// Prefer freshly built `out/`; otherwise keep existing `html/`
if (fs.existsSync(outDir)) {
  fs.rmSync(htmlDir, { recursive: true, force: true });
  fs.renameSync(outDir, htmlDir);
  console.log("Moved out/ → html/");
} else if (!fs.existsSync(htmlDir)) {
  console.error("No out/ or html/ found. Run npm run build first.");
  process.exit(1);
}

const redirects = [
  ["/blog", "/resources/", 301],
  ["/blog/", "/resources/", 301],
  ["/services", "/", 301],
  ["/services/", "/", 301],
  ["/about", "/about-us/", 301],
  ["/about/", "/about-us/", 301],
  ["/careers", "/about-us/", 301],
  ["/careers/", "/about-us/", 301],
  ["/case-studies", "/resources/", 301],
  ["/case-studies/", "/resources/", 301],
  ["/technologies", "/voip-solution/", 301],
  ["/technologies/", "/voip-solution/", 301],
  ["/solutions", "/products/contact-center-solutions/", 301],
  ["/solutions/", "/products/contact-center-solutions/", 301],
  ["/industries", "/voip-solutions-for-real-estate/", 301],
  ["/industries/", "/voip-solutions-for-real-estate/", 301],
  ["/services/web-development", "/services/mobile-web/web-development/", 301],
  ["/services/web-development/", "/services/mobile-web/web-development/", 301],
  ["/services/mobile-app-development", "/services/mobile-web/mobile-development/", 301],
  ["/services/mobile-app-development/", "/services/mobile-web/mobile-development/", 301],
  ["/services/ai-development", "/services/ai-ml-development-services/", 301],
  ["/services/ai-development/", "/services/ai-ml-development-services/", 301],
  ["/services/devops", "/services/devops-consulting-services/", 301],
  ["/services/devops/", "/services/devops-consulting-services/", 301],
  ["/services/qa-testing", "/services/qa-testing-services/", 301],
  ["/services/qa-testing/", "/services/qa-testing-services/", 301],
];

const netlify = redirects
  .map(([from, to, code]) => `${from}  ${to}  ${code}`)
  .join("\n");

fs.writeFileSync(path.join(htmlDir, "_redirects"), netlify + "\n");

const vercel = {
  redirects: redirects.map(([source, destination, statusCode]) => ({
    source,
    destination,
    statusCode,
  })),
};
fs.writeFileSync(
  path.join(htmlDir, "vercel.json"),
  JSON.stringify(vercel, null, 2)
);

console.log(
  `Static site ready: html/ (${fs.readdirSync(htmlDir).length} top-level entries)`
);
console.log("Serve with: npm run serve");
