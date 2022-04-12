import db from "../models/index.js"

const Seminar = db.seminar;
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


