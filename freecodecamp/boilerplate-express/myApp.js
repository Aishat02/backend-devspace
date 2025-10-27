let express = require("express");
let app = express();

app.use("/public", express.static(__dirname + "/public"));

let absolutePath = __dirname + "/views/index.html";

app
  .get("/", function (req, res) {
    res.sendFile(absolutePath);
  })
  .listen(8080, () => console.log("Server is running"));

