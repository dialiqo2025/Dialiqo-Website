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

const files = walk("src/components").filter((f) => /Tabs\.tsx$/i.test(f) || /HostedTabs\.tsx$/i.test(f));
let patched = 0;

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  const orig = s;

  // Replace single current.desc paragraph with all panels
  if (
    s.includes("const current =") &&
    s.includes("{current.desc}") &&
    !s.includes("data-tab-panel")
  ) {
    s = s.replace(/\s*const current = [^\n]+;\r?\n/, "\n");
    s = s.replace(
      /<p className=\{`mt-8 \$\{typo\.subtitle\} text-slate-300 max-w-4xl`\}>\s*\{current\.desc\}\s*<\/p>/,
      `{CLASS4_CUSTOM.items.map((item, i) => (
        <p
          key={item.title}
          data-tab-panel
          className={\`mt-8 \${typo.subtitle} text-slate-300 max-w-4xl \${active === i ? "" : "hidden"}\`}
        >
          {item.desc}
        </p>
      ))}`
    );
    // Fix wrong data source name - detect from import
    const importMatch = s.match(/import\s+\{\s*(\w+)\s*\}\s+from/);
    if (importMatch) {
      const dataName = importMatch[1];
      s = s.replace(/CLASS4_CUSTOM\.items\.map/g, `${dataName}.items.map`);
    }
  }

  if (s !== orig) {
    fs.writeFileSync(file, s);
    patched++;
    console.log("patched", file);
  } else {
    console.log("SKIP", file);
  }
}

console.log(`Total patched ${patched} of ${files.length}`);
