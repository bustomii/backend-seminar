import db from "../models/index.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { secret } from "../config/auth.js";

const User = db.user;
export const signup = (req, res) => {
    User.create({
        username: req.body.username,
        display_name:  req.body.display_name,
        password: bcrypt.hashSync(req.body.password, 8)
      })
        .then(user => {
            return res.status(201).send({
                message: "Success Created Account!",
            });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
}

export const cekUsername = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user == null){
            return res.status(201).send({
                message:false
            })
        }else{
            return res.status(201).send({
                message:true
            })
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

export const deleteAllUser = async (req, res) => {
    const arrayID = req.body.id
    try {
        for(let i=0; i<arrayID.length; i++){
            await User.destroy({where: {
                id:arrayID[i]
            }})
        }
        res.status(200).send({ message: true });
    }catch (err) {
        res.status(500).send({ message: false });
    }
}

export const deleteUser = (req, res) => {
    User.destroy({where: {
        id:req.body.id
    }}).then(user => {
        if(user == null){
            return res.status(201).send({
                message:false
            })
        }else{
            return res.status(201).send({
                message:true
            })
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

export const updateUser = async (req, res) => {
    try { 
        const data = await User.findByPk(req.userId)
        if(data){
            await data.update({password:bcrypt.hashSync(req.body.password, 8), username:req.body.username, display_name:req.body.display_name})
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