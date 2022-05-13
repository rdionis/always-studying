// ****** OPERATING SYSTEM MODULE ******

// it gives us information about our environment/operating system

const os = require("os");
const { CLIENT_RENEG_LIMIT } = require("tls");

// ****** PLATFORM ******
console.log(os.platform()); // returns linux or whatever the platform your OS works on

// ****** CPU ARCH ******
console.log(os.arch()); // x64

// ****** CPU CORE INFO ******
console.log(os.cpus()); // returns an object with info for every core of the CPU

// ****** FREE MEMORY ******
console.log(os.freemem());

// ****** TOTAL MEMORY ******
console.log(os.totalmem());

// ****** HOME DIRECTORY ******
console.log(os.homedir());

// ****** UPTIME ******
console.log(os.uptime());
