/*const hello = require('./hello')
hello()

const random = require('./random')
const max = Number(process.argv[2])
console.log(random(max))
*/

const addStudent = require('./addStudent.js')
addStudent({ name: process.argv[2], role: process.argv[3], php: false })
