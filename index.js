import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World mahmoud!'))
app.get('/notes', (req, res) => res.send('notes joy!'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))