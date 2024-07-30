const express = require('express')
const app = express()
require('dotenv').config()

const userRouter = require('./routes/index')

//Router
//GET :http://localhost:3000/
app.get('/', (req, res) => {
    return res.send('Home page')
})

//Router user
app.use('/users', userRouter)

// app.get('/users', (req, res) => {
//     const name = "Mr.Jhon Doe"
//     const age = 25

//    return res.json({
//         message: name,
//         data: age
//     })
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`SERVER running at http://localhost:${PORT}`)
})