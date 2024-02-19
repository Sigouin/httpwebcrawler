const { crawlPage } = require("./crawl");
const { printReport } = require("./report");

async function main() {
  if (process.argv.length < 3) {
    console.error("Less than one");
    process.exit(1);
  } else if (process.argv.length > 3) {
    console.error("More than one");
    process.exit(1);
  } else {
    const baseURL = process.argv[2];
    console.log(`Crawler is starting at ${baseURL}`);

    const pages = await crawlPage(baseURL, baseURL, {});
    printReport(pages);
  }
}

main();
