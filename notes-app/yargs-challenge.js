const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    handler: function() {
        console.log('Adding a new note');
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

console.log(yargs.argv);