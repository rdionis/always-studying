const EventEmitter = require("events");
const uuid = require("uuid"); //universally unique identifier

console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());
// generates a different and unique id every time

class Logger extends EventEmitter {
  log(msg) {
    // CALL EVENT
    this.emit("message", { id: uuid.v4(), msg }); // 'this' pertains to the class
  }
}

// module.exports = Logger;

const logger = new Logger(); //logger is a class, so we need to instantiate it

logger.on("message", (data) => console.log("Called Listener", data));

logger.log("Hello, World!");
logger.log("I love you!");
logger.log("You are the best!");
logger.log("You are so hot!");
