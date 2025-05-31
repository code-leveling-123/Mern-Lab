import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/api/fruits", (req, res) => {
  const { name, price } = req.body;
  console.log(`Received data from client: Name: ${name} and Price: ${price}`);
  res.status(200).send("Data recieved successfully");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
