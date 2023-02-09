const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use("/src",express.static('src'))
app.get('/', function (req, res) {
  res.render('index', { message: 'Hello Vue from Express with EJS!' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})