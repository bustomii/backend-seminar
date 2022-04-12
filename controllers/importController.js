import readXlsxFile from 'read-excel-file'
import db from "../models/index.js"
import reader from 'xlsx';

const Seminar = db.seminar;
export const ImportData = async (req, res) => {
    const file = req.files.file
    const filename = CreateRandomNameFile(25)+'.'+req.body.extention

    await file.mv('D:/Working File_Bustomi/App Seminar/backend-seminar/public/uploads/' + filename)

    const read = reader.readFile(`D:/Working File_Bustomi/App Seminar/backend-seminar/public/uploads/${filename}`)
    const sheets = read.SheetNames

    const temp = reader.utils.sheet_to_json(read.Sheets[read.SheetNames[0]])

    const dataSave = []
    for(let x=0; x < temp.length; x++){
        try{
            const addData = await Seminar.create({
            nama:temp[x].Nama,
            email:temp[x].Email,
            no_tlp:temp[x]["No Hp"]
        })
        dataSave.push(addData)
        }catch (err) {
            for(let y= 0; y<dataSave.length; y++){
                await Seminar.destroy({ where: { id: dataSave[y].id } })
            }
            res.send({
                status:400,
                message : 'Please cek data ! Column require value',
            })
        }
    }
    await Seminar.findAll({}).then(value => {
        res.status(200).send({
            message : 'Import data success',
            status:200,
            data:value,
    })}).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

const CreateRandomNameFile = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}



