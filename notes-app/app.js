const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes.js");

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
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  description: "Remove a note",
  handler: argv => notes.removeNote(argv.title)
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

yargs.parse();
