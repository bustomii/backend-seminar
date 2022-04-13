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
            return res.status(401).send({
                message: "Success Created Account!",
                display_name:''
            });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });

}