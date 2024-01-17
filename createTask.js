const fs = require('fs')
const readTasks = require('./readTasks')

const createTask = (title, body, status) => {

    const tasks = readTasks()
    if(tasks.find(t => t.title === title)){
        console.log('Title already exist, you should try updating.')
    }else{
        tasks.push({
            title: title,
            body: body || "",
            status: status || false
        })
        if(tasks){
            const dataJSON = JSON.stringify(tasks)
            fs.writeFileSync('tasks.json', dataJSON)
            console.log('New task added!')
        } else {
            console.log('Failed to add task!')
        }
    }
    
}

module.exports = createTask