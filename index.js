#!/usr/bin/env node

// to create a task manager app using cli
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const createTask = require('./createTask')
const deleteTask = require('./deleteTask')
const getTasks = require('./readTasks')
const updateTask = require('./updateTask')

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
            status:{
                describe:'Status',
                type: 'boolean'
            },
        },
        handler(argv) {
            createTask(argv.title, argv.body)
            // sql.addTask(argv.title, argv.body)
        },
    })
    .parse();
    
    
// delete a task
yargs(hideBin(process.argv))
.command({
    command: 'delete',
    describe: 'delete a new task',
    builder: {
        title: {
            describe: 'Task title',
            demandOption: true, 
            type: 'string', 
        }
    },
    handler(argv) {
        deleteTask(argv.title)
        // sql.deleteTask(argv.title, argv.body)
    },
})
.parse();


// update a task
yargs(hideBin(process.argv))
.command({
    command: "update",
    describe: 'Update a tasks',
    handler(argv){
        updateTask(argv.title, argv.body, argv.status)
    }
})
.parse();

// get all tasks
yargs(hideBin(process.argv))
.command({
    command: "get",
    describe: 'list all tasks',
    handler(){
        tasks = getTasks()
        tasks.forEach((task) => {
            console.log(task.title)
        })
    }
})
.parse();