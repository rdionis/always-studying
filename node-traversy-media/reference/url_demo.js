const { CLIENT_RENEG_LIMIT } = require("tls");
const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active"); // here "id" and "status" are parameters

// ****** SERIALIZED URL ******
console.log(myUrl.href);
console.log(myUrl.toString());
// both return http://mywebsite.com:8000/hello.html?id=100&status=active

// ****** HOST (ROOT DOMAIN) ******
console.log(myUrl.host); //mywebsite.com
//this is supposed to include the port, but it didn't show it here

// ****** HOSTNAME ******
console.log(myUrl.hostname); //mywebsite.com

// ****** PATHNAME ******
console.log(myUrl.pathname); ///hello.html

// ****** SERIALIZED QUERY ******
console.log(myUrl.search); // returns everything after the question mark in the URL

//(...) PASSEI UMA PARTE 45:00-56:00
