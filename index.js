const request = require("request");
const cheerio = require("cheerio");

// add link below.
request("link", (error, response, html) => {
  console.log(error);
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    // Change this line
    const pic = $(".classElement");
    console.log(pic.text());
  }
});
