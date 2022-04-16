const express = require("express");
const app = express();
const morgan = require("morgan");

// bring in routes
const { getPosts } = require("./routes/post");

app.get("/", getPosts);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
