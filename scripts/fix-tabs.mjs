import fs from "fs";
import path from "path";

const files = [
  "src/components/services/Class4CustomTabs.tsx",
  "src/components/services/Class5CustomTabs.tsx",
  "src/components/services/ContactCenterHostedTabs.tsx",
  "src/components/services/IvrImportanceTabs.tsx",
  "src/components/services/MvnoBillingCustomTabs.tsx",
  "src/components/services/MvnoCustomTabs.tsx",
  "src/components/services/SbcCustomTabs.tsx",
  "src/components/services/UcCustomTabs.tsx",
  "src/components/services/VoipBillingPersonalizedTabs.tsx",
  "src/components/services/WebrtcCustomTabs.tsx",
];

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  // Find data import: import { NAME } from "..."
  const m = s.match(/import\s+\{\s*([A-Z][A-Z0-9_]*)\s*\}\s+from/);
  if (!m) {
    console.log("NO DATA IMPORT", file);
    continue;
  }
  const dataName = m[1];
  s = s.replace(/useState\.items/g, `${dataName}.items`);
  // Also fix button map if still broken
  if (!s.includes(`${dataName}.items.map`) && s.includes(".items.map")) {
    console.log("unexpected", file);
  }
  fs.writeFileSync(file, s);
  console.log("fixed", file, "->", dataName);
}
