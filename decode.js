// output txt img key

const fs = require("fs");
const CryptoJS = require("crypto-js");
const secretKey = fs.readFileSync(process.argv[4], "utf-8");

const str = fs.readFileSync(process.argv[2], "utf-8");
var bytes = CryptoJS.AES.decrypt(str, secretKey);
var originalText = bytes.toString(CryptoJS.enc.Utf8);

const buffer = Buffer.from(originalText, "base64");

fs.writeFileSync(process.argv[3], buffer);

console.log("File Decrypted Successfully !!");
