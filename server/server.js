const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const bookmarkListRoutes = require("./routes/bookmarkListRoutes.js");

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("database connected"))
  .catch((err) => console.log(err));

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookmarkLists", bookmarkListRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running");
});
