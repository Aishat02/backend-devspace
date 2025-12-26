let dotenv = require("dotenv").config();
let express = require("express");
let app = express();

app.use("/", (req, res, next) => {
  console.log(`${req.method}${req.path} - ${req.ip}`);
  next();
});
app.use("/public", express.static(__dirname + "/public"));

let absolutePath = __dirname + "/views/index.html";

app
  .get("/", function (req, res) {
    res.sendFile(absolutePath);
  })
  .listen(8080, () => console.log("Server is running"));

app.get("/json", function (req, res) {
  let text = { message: "Hello json" };

  process.env.MESSAGE_STYLE === "uppercase"
    ? res.json(text.message.toUpperCase())
    : res.json(text.message.toLowerCase());
});

module.exports = app;
