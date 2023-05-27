const { sequelize, DataTypes, UUIDV4 } = require("../db/db_config")

const Users = sequelize.define("users", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true
  },

  username: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.TEXT
  },
  password: {
    type: DataTypes.TEXT
  },
})

module.exports = Users;