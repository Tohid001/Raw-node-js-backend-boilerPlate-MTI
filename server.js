const fs = require("fs");
const zlib = require("zlib");

/*
 * buffer reading & writting in traditional way
 */

// const readStream = fs.createReadStream("./text.txt", "utf-8");
// const writeStream = fs.createWriteStream("./output.txt", "utf-8");

// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });

// readStream.on("end", () => {
//   console.log("reading ended");
// });

/*
 * buffer reading & writting in using pipe
 */

const readStream = fs.createReadStream("./text.txt", "utf-8");
const writeStream = fs.createWriteStream("./output.txt", "utf-8");

readStream.pipe(writeStream);

// readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.text.gz"));/* creating zip file */
