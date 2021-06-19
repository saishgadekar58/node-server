const express = require("express");
const path = require("path");
// require("./db/conn");
const hbs = require("hbs");
const { registerPartials } = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

//setting the path
const partialpath = path.join(__dirname, "../templates/partials");
const templatepath = path.join(__dirname, "../templates/views");

//middleware

app.use(
  "/css",
  express.static(__dirname, "../node_modules/bootstrap/dist/css")
);
app.use("/js", express.static(__dirname, "../node_modules/bootstrap/dist/js"));
app.use("/jq", express.static(__dirname, "../node_modules/jquery/dist"));

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

//routing
app.get("/", (req, res) => {
  res.render("home");
});

//server listen
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
