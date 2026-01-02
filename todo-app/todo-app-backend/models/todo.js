const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Todo extends Model {}
Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING(140),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'todo'
  }
)

Todo.sync().catch((error) => {
  console.error('Counter sync failed: ', error)
})

module.exports = Todo
