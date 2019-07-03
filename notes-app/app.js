const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("Adding  a new note!", argv);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  description: "Remove a note",
  handler: () => console.log("Removing the note!")
});

// Create list command
yargs.command({
  command: "list",
  description: "List notes",
  handler: () => console.log("Listing out all notes")
});

// Create read command
yargs.command({
  command: "read",
  description: "Read a note",
  handler: () => console.log("Reading a note")
});

console.log(yargs.argv);
