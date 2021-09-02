// Input - img txt key

const fs = require("fs");
const CryptoJS = require("crypto-js");

const secretKey = fs.readFileSync(process.argv[4], "utf-8");

console.log("Processing...");

const base64str = fs.readFileSync(process.argv[2], "base64");

var ciphertext = CryptoJS.AES.encrypt(base64str, secretKey).toString();

console.log("Encrypting...");

fs.writeFileSync(process.argv[3], ciphertext, "utf-8");

console.log("File Encrypted Successfully.");
console.log("Keep the secret key in order to decrypt the file.");

fs.unlinkSync(process.argv[2]);
