import express from 'express'
import cors from 'cors'
import { prizesRouter } from './api/prizes'

const app = express()
const port = process.env.PORT || 3000

app.use(cors()) // Allow cross-origin requests

app.get('/api/hola', (req, res) => {
  return res.status(200).json("hola")    
})

// app.get('/prizes', (req, res) => {

//   const { litres } = req.query
//   if (litres) {
//     return res.status(200).json({ data: [1, 2, 3] })
//   }

//   return res.status(200).json({ data: [] })
// })


app.use('/prizes', prizesRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})