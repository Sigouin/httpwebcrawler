function printReport(pages) {
  console.log("====================");
  console.log("Start Report");
  console.log("====================");
  const sortedPages = sortPages(pages);
  for (const sortedPage of sortedPages) {
    const url = sortedPage[0];
    const count = sortedPage[1];
    console.log(`$Found ${count} internal links to ${url}`);
  }
  console.log("====================");
  console.log("End Report");
  console.log("====================");
}

function sortPages(pages) {
  const pagesArr = Object.entries(pages);
  pagesArr.sort((a, b) => b[1] - a[1]);
  return pagesArr;
}

module.exports = { printReport, sortPages };
