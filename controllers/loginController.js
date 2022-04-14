import db from "../models/index.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { secret } from "../config/auth.js";

const User = db.user;
export const signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(200).send({
                status:404,
                message: "User Not found." 
            });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(200).send({
                status:401,
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        var token = jwt.sign({ id: user.id }, secret, {
          expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            status:200,
            id: user.id,
            username: user.username,
            accessToken: token
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};


export const requestReset = async (req, res) =>  {
    try { 
        const data = await User.findOne({where : {
            username:req.body.username
        }}).then((res))

        if(data){
            await data.update({reset_password:1})
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