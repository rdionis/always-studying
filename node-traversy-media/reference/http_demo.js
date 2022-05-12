const http = require("http");

// ****** CREATE SERVER OBJECT ******
http
  .createServer((req, res) => {
    // Write response
    res.write("Hello, world"); // the writer() method outputs to the browser
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));
