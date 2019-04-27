// Scraping tools
var request = require("request");
var cheerio = require("cheerio");
var Article = require("../models/Article");

var scrape = function(){
  return new Promise((resolve, reject) => {
    // First, we grab the body of the html with request
    request("https://www.cnn.com/specials/health/live-longer", function(error, response, html) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      console.log(response);
      var $ = cheerio.load(html);
      // Now, we grab every h2 within an article tag, and do the following:
      $("span.cd__headline-text").each(function(i, element) {


        // Add the title and summary of every link, and save them as properties of the result object
        const title = $(this).text();
        const link = $(this).parent("a").attr("href");

        const result = {
          title,
          link
        }

        console.log(result);

        // Using our Article model, create a new entry
        // This effectively passes the result object to the entry (and the title and link)
        var entry = new Article(result);

        // Now, save that entry to the db
        entry.save(function(err, doc) {
          // Log any errors
          if (err) {
            console.log(err);
            reject();
          }
          // Or log the doc
          else {
            console.log(doc);
          }
        });

        resolve();

      });
    });
    // Tell the browser that we finished scraping the text
  });
}
module.exports = scrape;
