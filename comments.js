const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/comments", (req, res) => {
  const comment = req.body.comment;
  if (comment) {
    res.status(201).send({ message: "Comment received", comment: comment });
  } else {
    res.status(400).send({ message: "No comment provided" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
