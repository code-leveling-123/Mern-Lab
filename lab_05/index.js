const fs = require("fs");

fs.open("mynewfile1.txt", "w", (err) => {
  if (err) throw err;
  console.log("Saved!");
});

fs.unlink("mynewfile1.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});

fs.appendFile("mynewfile2.txt", "This is new text", (err) => {
  if (err) throw err;
  console.log("Updated file");
});

fs.readFile("mynewfile2.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content: ", data);
});
