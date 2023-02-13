import { DataTypes, Sequelize } from "sequelize"
import db from './conn'

export const Lang = db.sequelize.define('language', {
  language_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unknown: true

  },

  name: {
    type: DataTypes.CHAR,
    allowNull: false
  },

  last_update: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
}, {
  tableName: 'language',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "language_id" },
      ]
    },
  ]
});
