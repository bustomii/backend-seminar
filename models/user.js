export default (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      display_name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      reset_password: {
        type: Sequelize.INTEGER,
        defaultValue:0
      }
    })
    return User
  }