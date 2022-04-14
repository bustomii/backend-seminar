import db from "../models/index.js"
import bcrypt from "bcryptjs";

const Seminar = db.seminar;
const User = db.user;
export const dataApprove = async (req, res) => {
    try { 
        const data = await Seminar.findByPk(req.body.id)
        await data.update({status:req.body.type})
        await data.save()

        await Seminar.findAll({}).then(data => {
            res.status(200).send({
                status:200,
                data
            });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });

    }catch (err) {
        res.send(err)
    }
}

export const resetPasswordApprove = async (req, res) => {
    try { 
        const data = await User.findByPk(req.body.id)
        if(data){
            await data.update({reset_password:0, password:bcrypt.hashSync('@Astronacci2022', 8)})
            await data.save()
            res.status(201).send({
                message:true
            })
        }else{
            res.status(201).send({
                message:false
            })
        }
    }catch (err) {
        res.send(err)
    }
}

