// const Person = require("./person"); // common JS

// const person1 = new Person("John Doe", 30);
// const person2 = new Person("Matilda Kott", 12);

// person1.greeting();
// person2.greeting();

// const Logger = require("./logger");

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<h1>Home</h1>");
    // res.end();
    // the two lines above return the same as:
    res.end("<h1>Home</h1>");
  }
  // console.log(req.url);
});

const PORT = process.env.PORT || 5000;
// assigning the PORT to a variable
// when we deploy, it won't necessarily run on the port specified by us; it's gonna run on whatever our host is going to decide: an environment variable

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
