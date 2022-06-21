//Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
const yargs = require('yargs');

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
  handler: function(argv) {
    console.log('Title:', argv.title);
    console.log('Body:', argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note!',
  handler: function() {
    console.log('Removing the note!');
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note!',
  handler: function() {
    console.log('Reading the note');
  }
});

yargs.command({
  command: 'list',
  describe: 'List your notes!',
  handler: function() {
    console.log('Listing out all notes!');
  }
});

// Faz o parse dos comandos a serem executados e mostra no terminal
yargs.parse();
//console.log(yargs.argv);