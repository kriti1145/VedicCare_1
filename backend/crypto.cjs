const crypto = require("crypto");

// Generate 256 random bytes and convert to a base64 string
const randomBytes = crypto.randomBytes(256);
const base64String = randomBytes.toString("base64");

console.log(base64String);
