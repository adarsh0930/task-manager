const fs = require('fs')
const readTasks = require('./readTasks')

const deleteTask = (title) =>{ 
    const tasks = readTasks()
    const updatedTasks = tasks.filter((task) => task.title !== title)

    if (tasks.length > updatedTasks.length) {
        console.log('Task deleted!')
        const dataJSON = JSON.stringify(updatedTasks)
        fs.writeFileSync('tasks.json', dataJSON)
    } else {
        console.log("Task not found")
    }    
    }

module.exports = deleteTask