export default (sequelize, Sequelize) => {
    const Seminar = sequelize.define("present", {
      nama: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      no_tlp: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue:0
      }
    })
    return Seminar
  }