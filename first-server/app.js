/*const os = require ('os')
const {add,subtract}=require('./math')

console.log("Hello world!")

console.log(__dirname)
console.log(__filename)
console.log(os.platform())
console.log(os.version())

let sum = add(8,9)
console.log(sum)
*/
const express = require('express');
const products = require('./product')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/products', (req, res) => {
  res.status(200).json(products)
})
app.get('/', (req, res) => {
  res.send('Hello')
})


// getting-started.js
const mongoose = require('mongoose');
require('dotenv').config();
const dburl = process.env.MONGODBURL

main()
.then(() => console.log("DB Connected..."))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dburl);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})