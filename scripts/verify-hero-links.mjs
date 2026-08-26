import fs from "fs";
import * as cheerio from "cheerio";

const file = "site/index.html";
const $ = cheerio.load(fs.readFileSync(file, "utf8"));
const ul = $("ul.mt-12.mx-auto.max-w-4xl").first();
ul.find("li").each((i, li) => {
  const $li = $(li);
  const a = $li.find("a").first();
  console.log(i + 1, a.attr("href"), "|", a.find("span").last().text().trim());
});
// Ensure grid item layout: li should not collapse
ul.find("li").attr("class", "");
fs.writeFileSync(file, $.html());
