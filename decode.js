// output txt img key

const fs = require("fs");
const CryptoJS = require("crypto-js");
const secretKey = fs.readFileSync(process.argv[3], "utf-8");

console.log("Processing...");

const str = fs.readFileSync("encrypt.txt", "utf-8");

console.log("Decrypting...");

var bytes = CryptoJS.AES.decrypt(str, secretKey);
var originalText = bytes.toString(CryptoJS.enc.Utf8);

const buffer = Buffer.from(originalText, "base64");

fs.writeFileSync(process.argv[2], buffer);
fs.unlinkSync("encrypt.txt");

console.log("File Decrypted Successfully !!");
