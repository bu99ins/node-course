const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes…";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length !== 0) {
    console.log("Note title taken!");
    return;
  }

  notes.push({
    title: title,
    body: body
  });

  saveNotes(notes);
  console.log("New note added!");
};

const removeNote = title => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }

  saveNotes(notesToKeep);
};

const saveNotes = notes => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
