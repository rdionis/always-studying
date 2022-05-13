// ****** PATH MODULE ******

const path = require("path");
// 'path' is a core module, so you don't need the file path './' or to npm install anything

//Base file name

console.log(__filename); // returns the whole path ending in the file name
console.log(path.basename(__filename)); // returns just the file name

// Directory name
console.log(path.dirname(__filename));
console.log(__dirname); // returns the same as the line above

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
