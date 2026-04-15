const mqtt = require("mqtt");

console.log("Bridge start...");
console.log("Waiting for MQTT...");

// KEEP PROCESS ALIVE
setInterval(() => {
  console.log("Bridge alive...");
}, 10000);
