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
  const orig = s;

  s = s.replace(
    /\{\s*isOpen\s*&&\s*\(\s*\r?\n(\s*)<p className="([^"]+)"([^>]*)>\s*\r?\n(\s*)\{faq\.answer\}\s*\r?\n(\s*)<\/p>\s*\r?\n(\s*)\)\}/g,
    (_m, _indent, cls, extra, i2, i3) =>
      `<p className={\`\${isOpen ? "" : "hidden"} ${cls}\`} data-faq-answer${extra}>\n${i2}{faq.answer}\n${i3}</p>`
  );

  s = s.replace(
    /\{\s*isOpen\s*&&\s*\(\s*<p className="([^"]+)"([^>]*)>\s*\{faq\.answer\}\s*<\/p>\s*\)\}/g,
    `<p className={\`\${isOpen ? "" : "hidden"} $1\`} data-faq-answer$2>{faq.answer}</p>`
  );

  if (s !== orig) {
    fs.writeFileSync(file, s);
    patched++;
    console.log("patched", file);
  } else {
    console.log("SKIP", file);
  }
}

console.log(`Total patched ${patched} of ${files.length}`);
