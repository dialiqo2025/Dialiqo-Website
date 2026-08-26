import fs from "fs";
import path from "path";

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith(".tsx")) acc.push(p);
  }
  return acc;
}

const files = walk("src/components").filter((f) => /Faq\.tsx$/i.test(f));
let patched = 0;

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  if (!s.includes("{isOpen && (")) continue;
  const orig = s;

  // Convert: {isOpen && ( <div|p className="..." > ... </div|p> )}
  // to always-rendered with hidden class when closed
  s = s.replace(
    /\{\s*isOpen\s*&&\s*\(\s*\r?\n(\s*)<(div|p) className="([^"]+)"/g,
    (_m, indent, tag, cls) =>
      `<${tag} data-faq-answer className={\`\${isOpen ? "" : "hidden"} ${cls}\`}`
  );

  // Remove closing `)}` that matched the conditional — only the ones after faq answer blocks
  // After the above replace, we still have trailing `)}` from `{isOpen && (`
  // Pattern: </div>\n            )}  or </p>\n            )}
  s = s.replace(
    /(data-faq-answer[\s\S]*?<\/(?:div|p)>)\s*\)\}/g,
    "$1"
  );

  if (s !== orig) {
    fs.writeFileSync(file, s);
    patched++;
    console.log("patched", file);
  } else {
    console.log("FAIL", file);
  }
}

console.log(`Total patched ${patched}`);
