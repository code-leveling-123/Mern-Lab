const express = require("express");
const app = express();

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Black",
};

app.get("/api/car", (req, res) => {
  res.json(car);
});

app.delete("/api/car/:propertyIndex", (req, res) => {
  const propertyIndex = parseInt(req.params.propertyIndex);

  if (
    isNaN(propertyIndex) ||
    propertyIndex < 0 ||
    propertyIndex >= Object.keys(car).length
  ) {
    return res.status(400).json({ error: "Invalid property index" });
  }

  const propertyToDelete = Object.keys(car)[propertyIndex];
  delete car[propertyToDelete];

  res.json({
    deletedProperty: propertyToDelete,
    remainingProperties: Object.keys(car),
    ObjectLength: Object.keys(car).length,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is connected to http://localhost:3000/");
});
