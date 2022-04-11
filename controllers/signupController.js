import db from "../models/index.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { secret } from "../config/auth.js";

const User = db.user;
export const signup = (req, res) => {
    User.create({
        username: "admin",
        password: bcrypt.hashSync("@Astronacci2022", 8)
      })
        .then(user => {
            return res.status(401).send({
                message: "Success Created Account!"
            });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });

}