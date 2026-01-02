const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Counter extends Model {}
Counter.init(
  {
    id: {
      type: DataTypes.BOOLEAN,
      primaryKey: true,
    },
    value: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'counter',
    freezeTableName: true,
  }
)

Counter.sync().catch((error) => {
  console.error('Counter sync failed: ', error)
})

module.exports = Counter
