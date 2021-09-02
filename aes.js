const CryptoJS = require("crypto-js");
const fs = require("fs");

const str = fs.readFileSync('out.txt','utf-8');

var ciphertext = CryptoJS.AES.encrypt(str, 'secret key 123').toString();


var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

fs.writeFileSync("decrypt.txt", originalText);