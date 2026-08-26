import fs from "fs";

const p = "site/assets/css/app.css";
let c = fs.readFileSync(p, "utf8");
c = c.replace(/@font-face\{[^}]+\}/g, "");
c = c.replace(/\/_next\/static\/media\/[^)"\s]+/g, "");
fs.writeFileSync(p, c);
console.log("cleaned css bytes", c.length);

const conv = "scripts/to-pure-html.mjs";
let s = fs.readFileSync(conv, "utf8");
if (!s.includes("Strip Next font")) {
  s = s.replace(
    'fs.writeFileSync(path.join(dest, "assets", "css", "app.css"), merged);',
    `merged = merged.replace(/@font-face\\{[^}]+\\}/g, "").replace(/\\/_next\\/static\\/media\\/[^)"\\s]+/g, "");
    // Strip Next font faces — Google Fonts loaded in HTML
    fs.writeFileSync(path.join(dest, "assets", "css", "app.css"), merged);`
  );
  fs.writeFileSync(conv, s);
  console.log("converter patched");
}
