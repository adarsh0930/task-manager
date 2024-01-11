const fs = require('fs')

const createTask = (title, body) => {
    const task = {
        title: title,
        body: body || ""
    }
    if(task){
        const dataJSON = JSON.stringify(task)
        fs.appendFileSync('task.json', dataJSON)
        console.log('New task added!')
    } else {
        console.log('Failed to add task!')
    }
}

module.exports = createTask