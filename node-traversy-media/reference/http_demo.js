// ****** HTTP MODULE ******

const http = require("http");

// ****** CREATE SERVER OBJECT ******
http
  .createServer((req, res) => {
    // request, response
    // Write response
    res.write("Hello, world"); // the write() method outputs to the browser
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));
