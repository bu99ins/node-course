const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.bold.inverse.green("Success!");
console.log(greenMsg);

console.log(process.argv[2]);
