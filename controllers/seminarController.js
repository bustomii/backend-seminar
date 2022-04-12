import db from "../models/index.js"

const Seminar = db.seminar;
export const DataSeminar = (req, res) =>{
    Seminar.findAll({}).then(data => {
        res.status(200).send({
            status:200,
            data
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

export const DeleteAll = (req, res) =>{
    Seminar.destroy({
        where: {},
        truncate: true
      }).then(() => {
        res.status(200).send({
            status:200,
            data:[]
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

