import express from 'express'
const app = express()
app.use(express.json())
import dotenv from 'dotenv'
dotenv.config()
import dbConnections from './db/dbConnections.js'
import noteRouter from './db/models/src/modules/notes/notes.routes.js'
import noteModel from './db/models/notes.js'
app.use(noteRouter)
app.get('/', async(req, res) =>{
        const notes =  await  noteModel.find()
         res.json({message:"success",notes})
         res.send('success')
      }
)



const port = process.env.PORT
app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
        dbConnections()
    })