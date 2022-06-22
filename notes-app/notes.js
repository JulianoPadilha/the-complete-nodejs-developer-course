const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'Your notes...';
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.bold.white.bgGreen('New note added!'));
  } else {
    console.log(chalk.bold.white.bgRed('Note title taken!'));
  }
}

const removeNote = function (title) {
  const notes = loadNotes();
  const remainedNotes = notes.filter(note => note.title !== title);
  if (notes.length === remainedNotes.length) {
    console.log(chalk.bold.white.bgRed('No note found!'));
  } else {
    saveNotes(remainedNotes);
    console.log(chalk.bold.white.bgGreen('Note removed!'));
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
};