module.exports = function addStudent(student) {
  const mongoose = require('mongoose')
  const User = require('./models/User.js')

  mongoose
    .connect('mongodb://localhost/neuefische', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('we are connected!'))
    .catch(error => console.error(error))

  //User.find().then(users => console.log(users))  //um users zu zeigen
  User.create(student).then(result => {
    console.log(result)
    mongoose.connection.close()
  })
}
