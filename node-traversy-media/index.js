// const Person = require("./person"); // common JS

// const person1 = new Person("John Doe", 30);
// const person2 = new Person("Matilda Kott", 12);

// person1.greeting();
// person2.greeting();

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
