const path = require("path");

const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "views", "welcome.html");
  res.sendFile(filePath);
});

app.get("/student/:id", (req, res) => {
  const { id } = req.params;
  if (id === "1") {
    return res.json({
      id: 1,
      name: "Alain",
      age: 22,
    });
  }
  if (id === "2") {
    return res.json({
      id: 2,
      name: "Claryce",
      age: 40,
    });
  }

  res.status(404).send("Not found");
});

module.exports = app;

if (require.main === module) {
  app.listen(80, function () {
    console.log("Serveur Express démarré sur le port 80");
  });
}
