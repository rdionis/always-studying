// ****** EVENTS ******

const EventEmitter = require("events");

// CREATE CLASS
class MyEmmitter extends EventEmitter {}

// INIT OBJECT
const myEmitter = new MyEmmitter();

// EVENT LISTENER
myEmitter.on("event", () => console.log("Event fired!"));

// INIT EVENT
myEmitter.emit("event");
