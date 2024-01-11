#!/usr/bin/env node

// to create a task manager app using cli
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const createTask = require('./create')

// console.log(process.argv);

// create a task
yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add a new task',
        builder: {
            title: {
                describe: 'Task title',
                demandOption: true, 
                type: 'string', 
            },
            body: {
                describe: 'Task body',
                type: 'string',
            },
        },
        handler(argv) {
            createTask(argv.title, argv.body)
            // sql.addTask(argv.title, argv.body)
        },
    })
    .parse();
    
// delete a task

// change task status

// get a task's description

// get all tasks