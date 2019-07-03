const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  description: "Add a new note",
  handler: function() {
    console.log("Adding  a new note!");
  }
});

// Create remove command
yargs.command({
  command: "remove",
  description: "Remove a note",
  handler: () => console.log("Removing the note!")
});

console.log(yargs.argv);
