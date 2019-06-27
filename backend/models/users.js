const Sequelize = require('sequelize')

const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER

//Open Database Connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

//Create the Schema
const Users = sequelize.define('users',{
    id:{
      type: INTEGER,
      primaryKey: true
    },
    username: {type: STRING},
    password: {type: STRING},
    first_name: {type: STRING},
    last_name: {type: STRING},
    bio: {type: STRING}
})

module.exports = Users

sequelize.sync()
