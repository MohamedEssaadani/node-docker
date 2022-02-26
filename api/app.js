const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "111",
      title: "The Matrix",
    },
    {
      id: "22",
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

app.listen(4000, () => {
  console.log("Listen on port 4000...");
});
