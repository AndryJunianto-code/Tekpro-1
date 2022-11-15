const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("database connected"))
  .catch((err) => console.log(err));

app.use("/api/posts", postRoutes);

app.listen("5000", () => {
  console.log("backend is running");
});
