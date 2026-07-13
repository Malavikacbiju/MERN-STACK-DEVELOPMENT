const express = require('express');
const Product = require('./models/product')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
  res.send('Hello')
})
//update product
app.patch('/products/:id',async(req,res)=>{
  try {
    const productId=req.params.id
    if(!productId){
      return res.status(400).json
      ({error:"Product ID is required"})
    }
    if(!req.body){
      return res.status(400).json
      ({error:"Product details cannot be empty"})

    }
    const product=await Product.findByIdAndUpdate(productId,req.body,{new:true})
    res.status(200).json({message:"Product updated",updateProduct:product})

  } catch(error){
    console.log(error)
    res.status(500).json({error:error.message})
  }
})
//delete product
app.delete('/products/:id',async(req,res)=>{
  try {
    const productId=req.params.id
    if(!productId){
      return res.status(400).json
      ({error:"Product ID is required"})
    }
   
    const product=await Product.findByIdAndDelete(productId)
    res.status(200).json({message:"Product deleted"})

  } catch(error){
    console.log(error)
    res.status(500).json({error:error.message})
  }
    

})


app.get('/products', async(req, res) => {
    try{
        const product = await Product.find()
        res.status(200).json(products)
    }catch(error){
        console.log(error)
        res.status(500).json({error:error})
    }
})

app.post('/products', async(req, res) => {
    try{
        const {title,price,description,image} = req.body
        const product =new Product({title,price,description,image})
        await product.save()
        res.status(201).json({message:"Product added",product})
    }catch(error){
        console.log(error)
        res.status(500).json({error:error.message})
    }
})

// getting-started.js
const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.MONGODBURL

main()
.then(()=>console.log("DB connected..."))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})