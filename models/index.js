import { DB, USER, PASSWORD, HOST, dialect as _dialect, pool as _pool } from "../helper/db.js"
import Sequelize from "sequelize"
import User from "../models/user.js"
import Seminar from "./seminar.js"

const sequelize = new Sequelize(
  DB,
  USER,
  PASSWORD,
  {
    host: HOST,
    dialect: _dialect,
    operatorsAliases: false,
    pool: {
      max: _pool.max,
      min: _pool.min,
      acquire: _pool.acquire,
      idle: _pool.idle
    }
  }
)

const db = {}
db.Sequelize = Sequelize 
db.sequelize = sequelize
db.user = User(sequelize, Sequelize)
db.seminar = Seminar(sequelize, Sequelize)

export default db
