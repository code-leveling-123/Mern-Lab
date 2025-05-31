const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/COLLEGE", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log("Failed connecting to mongodb: ", err));

const studentSchema = new mongoose.Schema({
  usn: String,
  name: String,
  sem: Number,
  year_of_addmission: Number,
});

const Student = mongoose.model("Students", studentSchema);

app.use(express.json());

app.post("/students", async (req, res) => {
  try {
    const studentData = req.body;
    const result = await Student.insertMany(studentData);
    console.log(`Inserted ${result.length} documents in collection`);

    res
      .status(201)
      .json({ message: `Inserted ${result.length} documents in collection` });
  } catch (error) {
    console.error("Error inserting documents: ", error);
    res.status(500).json({ error: "Error inserting documents" });
  }
});

app.get("/students/search", async (req, res) => {
  try {
    const partialName = req.query.partialName;
    if (!partialName) {
      return res
        .status(400)
        .json({ error: "Partial name parameter is required" });
    }
    const regex = new RegExp(partialName, "i");

    const students = await Student.find({ name: { $regex: regex } });
    res.status(200).json(students);
  } catch (error) {
    console.error("Error searching for student");
    res.status(500).json({ error: "Error searching for student" });
  }
});

app.listen(port, () => {
  console.log(`Server is connected to http://localhost:${port}`);
});
