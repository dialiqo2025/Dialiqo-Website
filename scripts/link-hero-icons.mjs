import fs from "fs";
import * as cheerio from "cheerio";

const file = "site/index.html";
const html = fs.readFileSync(file, "utf8");
const $ = cheerio.load(html);

const LINKS = {
  VoIP: "/services/voip-development/",
  WebRTC: "/voip-solution/webrtc-solutions/",
  SIP: "/services/voip/opensips/",
  "Voice AI": "/services/ai-voicebot-connector/",
  Mobile: "/services/mobile-web/mobile-development/",
  "24/7 Support": "/contact/",
};

const ul = $("ul.mt-12.mx-auto.max-w-4xl").first();
if (!ul.length) {
  console.error("Hero capabilities list not found");
  process.exit(1);
}

ul.find("li").each((_, li) => {
  const $li = $(li);
  const label = $li.find("span").last().text().trim();
  const href = LINKS[label];
  if (!href) {
    console.warn("No link for", label);
    return;
  }
  // Already linked?
  if ($li.find("a").length) {
    $li.find("a").attr("href", href);
    return;
  }
  const inner = $li.html();
  $li.html(
    `<a href="${href}" class="flex flex-col items-center gap-2 text-center group hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl">${inner}</a>`
  );
  // Remove duplicate flex classes from outer li if present — keep li as wrapper
  $li.attr("class", "list-none");
});

fs.writeFileSync(file, $.html());
console.log("Hero capability icons linked:");
Object.entries(LINKS).forEach(([k, v]) => console.log(`  ${k} → ${v}`));
