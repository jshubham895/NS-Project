const fs = require("fs");

const base64 = fs.readFileSync(process.argv[2], "base64");

const buffer = Buffer.from(base64, "base64");

fs.writeFileSync(process.argv[3], buffer);
