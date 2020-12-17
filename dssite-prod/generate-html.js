const ejs = require("ejs");
const util = require("util");
const fs = require("fs");
const path = require("path");

//*******************************
//** Utils
//*******************************
// const mkdir = util.promisify(fs.mkdir);
// const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

function render(fromFile, toFile, model) {
  return ejs
    .renderFile(fromFile, model)
    .then((html) => writeFile(toFile, html, "utf8"))
    .catch(console.log);
}

//*******************************
//** Main
//*******************************
async function main() {
  const htmldir = __dirname + "/dist";
  if (!fs.existsSync(htmldir)) {
    fs.mkdirSync(htmldir, 0744);
  }

  console.log("Converting .ejs to .html");

  const manifest = await require("./dist/manifest.json");

  const model = {
    mainJS: manifest["main.js"],
    mainCSS: manifest["main.css"],
  };

  render("templates/pages/home.ejs", "dist/index.html", model);
}

main();
