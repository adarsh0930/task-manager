const fs = require('fs')
const readTasks = require('./readTasks')
const deleteTask = require('./deleteTask')
const createTask = require('./createTask')

const update = (title, body, status) => {
    const getTask = (title) => {
        const tasks = readTasks()
        let task = tasks.find(t => t.title === title)
        return task
    } 
    const task = getTask(title)
    if(body){
        task.body = body
    }
    if(status){
        task.status = status
    }
    deleteTask(title)
    createTask(task.title, task.body, task.status)

}

module.exports = update