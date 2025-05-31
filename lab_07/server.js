import express from "express";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const users = [];

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).send("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ email, password: hashedPassword });
    res.status(200).send("User registered successfully");
  } catch (error) {
    console.log("Error registering user: ", error);
    res.status(500).send("Internal server error");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("Invalid credentials");
    }
    res.status(200).send("Login successfully");
  } catch (error) {
    console.log("Error logging in user: ", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log("Server is connected to port");
});
