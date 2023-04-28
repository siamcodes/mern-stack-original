const express = require('express')
const app = express()
const port = 3000

const apiRoutes = require("./routes/apiRoutes")

app.get('/', (req, res) => {
    console.log("synchronous code")
    throw new Error("some error occured")
    res.json({message: "API running..."})
})

app.get('/a', (req,res,next) => {
    setTimeout(() => {
        console.log("asynchronouse code");
        // throw new Error("some error occured")
        next(new Error("some error occured"))
    },1000)
    // res.send("Hello World!")
})

app.use('/api', apiRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
