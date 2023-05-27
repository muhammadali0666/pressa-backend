const { sequelize, DataTypes, UUIDV4 } = require("../db/db_config")

const Cards = sequelize.define("cards", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true
  },

  img: {
    type: DataTypes.TEXT
  },
  title: {
    type: DataTypes.TEXT
  },
  fullname: {
    type: DataTypes.TEXT
  },
  profession: {
    type: DataTypes.TEXT
  },
  date: {
    type: DataTypes.TEXT
  },
  time: {
    type: DataTypes.TIME
  },
  network: {
    type: DataTypes.TEXT
  },
  view: {
    type: DataTypes.INTEGER,
    defaultValue: 2555
  },
  phoneNumber: {
    type: DataTypes.INTEGER
  },
  isApply: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
})

module.exports = Cards;