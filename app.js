const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(err);
});

// bring in routes
const postRoutes = require("./routes/post");

// middleware
app.use(morgan("dev"));

app.use("/", postRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
