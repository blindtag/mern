const express = require("express");
const mongoose = require("mongoose");
const app = express();

const users = require("./routes/api/users.js");
const profile = require("./routes/api/profile.js");
const posts = require("./routes/api/posts.js");

//db config
const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => res.send(" hello world! "));

//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server running on port ${port}`));
