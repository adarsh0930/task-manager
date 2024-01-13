const fs = require('fs')

const readTasks = () => {
        const data = fs.readFileSync('tasks.json')
        const dataJSON = data.toString()
        return JSON.parse(dataJSON)
}

   
module.exports = readTasks