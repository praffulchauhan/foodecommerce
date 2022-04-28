const express = require('express')
const app = express()
const mongoose = require("mongoose");
const port = 5000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/menu", require("./Routes/menu.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  mongoose.connect("mongodb://localhost/food_ecommerce").then((result)=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log("Database connection failed")
    console.log(e)
})
})