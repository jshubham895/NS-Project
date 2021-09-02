// Input - img txt key

const fs = require("fs");
const CryptoJS = require("crypto-js");

const secretKey = fs.readFileSync(process.argv[4], "utf-8");

const base64str = fs.readFileSync(process.argv[2], "base64");
var ciphertext = CryptoJS.AES.encrypt(base64str, secretKey).toString();

fs.writeFileSync(process.argv[3], ciphertext, "utf-8");

console.log("File Encrypted Successfully");
