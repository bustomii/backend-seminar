import db from "../models/index.js"

const Seminar = db.seminar;
const User = db.user;
export const DataSeminar = async (req, res) =>{
    const auth = await User.findOne({where: {id:req.userId}})
    if(auth.id == 1){
        await User.findAll({}).then(data => {
            res.status(200).send({
                status:200,
                data,
                user: {id:auth.id, display_name:auth.display_name}
            });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
    }else{
        await Seminar.findAll({}).then(data => {
            res.status(200).send({
                status:200,
                data,
                user: {id:auth.id, display_name:auth.display_name}
            });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
    }
}

export const DeleteAll = (req, res) =>{
    if(req.body.admin){
        res.status(200).send({
            status:200,
            data:[]
        });
    }else{
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
}

