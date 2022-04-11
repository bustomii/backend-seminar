export default (sequelize, Sequelize) => {
    const Seminar = sequelize.define("present", {
      nama: {
        type: Sequelize.STRING
      },
      no_tlp: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.NUMBER,
        defaultValue:0
      }
    })
    return Seminar
  }