const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log("first middleware");
    next()
})

app.get('/', (req, res, next) => {
    console.log("second middleware");
  res.send('Hello World!')
//   next()
})

app.get('/two', (req, res) => {
    console.log("third middleware");
  res.send('Hello World 2!')
})

app.use((req,res) => {
    console.log("fourth middleware");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
