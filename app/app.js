const express = require("express");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "The Matrix",
    },
    {
      id: "2",
      title: "Jhon Wick",
    },
    {
      id: "332",
      title: "interstellar",
    },
    {
      id: "4",
      title: "the shawshank redemption",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Listen on port 3000...");
});
