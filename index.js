import express from 'express'
const app = express()
app.use(express.json())
import dotenv from 'dotenv'
dotenv.config()
import dbConnections from './db/dbConnections.js'
import noteRouter from './db/models/src/modules/notes/notes.routes.js'
app.use('/',noteRouter)

app.get('/',(req,res)=>{
    res.json({message:"success"})
    res.send("success 2")
})



const port = process.env.PORT
app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
        dbConnections()
    })