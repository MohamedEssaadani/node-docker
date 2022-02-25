const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: "111",
      title: "The Matrix",
    },
    {
      id: "222",
      title: "Jhon Wick",
    },
    {
      id: "3332",
      title: "Interstellar",
    },
    {
      id: "4",
      title: "The shawshank redemption",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Listen on port 3000...");
});