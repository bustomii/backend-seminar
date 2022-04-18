import express from 'express'
import routes from './routes/index.js'
import cors from 'cors'
import db from './models/index.js'
import fileUpload from 'express-fileupload'
import fs from "fs"

var privateKey = fs.readFileSync('./private.key');
var certificate = fs.readFileSync('./root.crt');

var credentials = {key: privateKey, cert: certificate};

const app = express(credentials)
db.sequelize.sync({force: false}).then(() => {
  console.log('Database Connected');
});
// middleware
app.use(cors())
app.use(fileUpload());
app.use(express.static("files"));
app.use(express.json())
app.use('/', routes)

// listening to port
app.listen('4000', () => console.log('Server Running at port: 4000'))
