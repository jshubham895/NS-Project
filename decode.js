const fs = require('fs');

const str = fs.readFileSync('out.txt','utf-8');
const buffer = Buffer.from(str, "base64");

fs.writeFileSync("out.jpg", buffer);