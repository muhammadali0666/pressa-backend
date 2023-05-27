const { Sequelize, DataTypes, UUIDV4 } = require("sequelize")

const sequelize = new Sequelize({
  username: "bjikwvhj",
  database: "bjikwvhj",
  password: "28508dN0DdUooxuaV4Uy-xrz_bSz26hP",
  // port: 5432,
  host: "arjuna.db.elephantsql.com",
  dialect: "postgres",
  logging: false
})


sequelize
  .authenticate()
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err))



module.exports = {
  sequelize,
  DataTypes,
  UUIDV4
}