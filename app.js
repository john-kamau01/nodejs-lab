const express = require("express");
const app = express();

const people = require("./routes/people");
const login = require("./routes/login");

// Static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/login", login);
app.use("/api/people", people);

app.listen(5050, () => {
  console.log("server listening on port 5050...");
});
