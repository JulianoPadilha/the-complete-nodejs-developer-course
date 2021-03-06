//Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
// Para rodar esse arquivo: node yargs-challenge.js add --title="t" --body="b"
const yargs = require('yargs');

const { addNote, removeNote, listNotes, readNote } = require('./notes');

yargs.command({
  command: 'add',
  describe: 'Add a new note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string', 
    },
  },
  handler(argv) {
    removeNote(argv.title);
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    readNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'List your notes!',
  handler() {
    listNotes();
  }
});

// Faz o parse dos comandos a serem executados e mostra no terminal
yargs.parse();
//console.log(yargs.argv);