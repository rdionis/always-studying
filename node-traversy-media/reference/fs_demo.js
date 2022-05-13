// ****** FILE SYSTEM MODULE ******

const fs = require("fs"); // fs = file system module
const path = require("path");

// ****** CREATE FOLDER ******

// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// ****** CREATE AND WRITE TO FOLDER ******
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello, World!", (err) => {
//   if (err) throw err;
//   console.log("File written to...");

// ****** FILE APPEND ******
// we are running this inside the callback
//   fs.appendFile(path.join(__dirname, "./test", "hello.txt"), " I love Node.js", (err) => {
//     if (err) throw err;
//     console.log("File written to again...");
//   });
// });

// ****** READ FILE ******
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   // "utf8" here is so that we'll be shown the proper text instead of something like: "<Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21 20 49 20 6c 6f 76 65 20 4e 6f 64 65 2e 6a 73>"
//   if (err) throw err;
//   console.log(data);
// });

// ****** RENAME FILE ******
// fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloworld.txt"), (err) => {
//   if (err) throw err;
//   console.log("File renamed...");
// });
