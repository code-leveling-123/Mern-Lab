const http = require("http");

const server = http.createServer((req, res) => {
  const headers = req.headers;
  console.log(headers, "\n\n");

  if (headers.cookie) {
    console.log("Cookies: ", headers.cookie);
  } else {
    console.log("No cookies found in request header");
  }

  res.writeHead(200, { "content-type": "text/html" });
  res.end("Check console for cookies information");
});

server.listen(3000, () => {
  console.log("Server is runnig at http://localhost:3000/");
});
