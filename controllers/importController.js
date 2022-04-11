import readXlsxFile from 'read-excel-file'
import db from "../models/index.js"
import reader from 'xlsx';

const Seminar = db.seminar;
export const ImportData = async (req, res) => {
    const file = req.files.file
    const filename = CreateRandomNameFile(25)+'.'+req.body.extention

    // file.mv('D:/Working File_Bustomi/App Seminar/backend-seminar/public/uploads/' + filename)

    try {
        const read = reader.readFile(`D:/Working File_Bustomi/App Seminar/backend-seminar/public/uploads/3pmtpI9iXpAz2eMO22vHCXPlm.xlsx`)
        const sheets = read.SheetNames
        
        const array =[]
        for(let i = 0; i < sheets.length; i++)
        {
            const temp = reader.utils.sheet_to_json(
                read.Sheets[read.SheetNames[i]])
            temp.forEach((res) => {
                array.push(res)
            })
        }

        res.send({
            sheets:sheets.length,
            array
        })

        res.send({
            array
        })
    }catch (err) {
        res.send(err)
    }
}

const functionRead = (filename) => {
    const array = []
    const read = reader.readFile(`D:/Working%20File_Bustomi/App%20Seminar/backend-seminar/public/uploads/LuyCWDDbFnLzktxSQyPSlzLvX.xlsx`)

    for(let i = 0; i < sheets.length; i++){
        const temp = reader.utils.sheet_to_json(
        read.Sheets[read.SheetNames[i]])
        
        temp.forEach((res) => {
            array.push(res)
        })
    }

    return array
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



