const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

// Configure view engine and directory
app.set("view engine", "ejs");
app.set("views", "./templates");
app.use("/public", express.static("public"));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true,
  })
);

const model = {
  mainJS: "",
  mainCSS: "",
};

try {
  const rawdata = fs.readFileSync("./dist/manifest.json");
  const manifest = JSON.parse(rawdata);
  model.mainJS = manifest["main.js"];
  model.mainCSS = manifest["main.css"];
} catch (error) {
  console.log("🚀 ~ file: server.js ~ line 36 ~ error", error);
}

// *****************************************
// ** Configure route here
// *****************************************
app.get("/", function (req, res) {
  res.render("pages/home", model);
});

app.get("/:page", function (req, res) {
  res.render("pages/" + req.params.page, model);
});

const PORT = process.env.PORT || 3000;

// Serve the files on port 3000.
app.listen(PORT, function () {
  console.log("Example app listening on port 3000!\n");
});
