const express = require('express');
const Product = require('./models/product')
const app = express()
const port = 3000
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//update products
app.patch('/products/:id',async(req,res)=>{
  try{
    const productId=req.params.id
    if(!productId)
      return res.status(400).json
      ({error:"Product details cannot be empty"})

    const product = await Product.findByIdAndUpdate(productId,req.body,{new:true})
    res.status(200).json({message:"Product updated",updatedProduct:product})
  } catch (error){
        console.log(error)
        res.status(500).json({error:error.message})
    }
})

//delete products
app.delete('/products/:id',async(req,res)=>{
  try{
    const productId=req.params.id
    if(!productId){
      return res.status(400).json
      ({error:"Product ID is required"})
    }

    const product = await Product.findByIdAndDelete(productId)
    res.status(200).json({message:"Product Deleted"})
  } catch (error){
        console.log(error)
        res.status(500).json({error:error.message})
    }
})

app.get('/hello', (req, res) => {
  res.send('Hello')
})

app.get('/products', async(req, res) => {
    try{
        const products = await Product.find()
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

//AI integrated description generator
app.post('/generate-description', async (req, res) => {
  const { productName, keywords } = req.body;

  const prompt = `Write a compelling 2-3 sentence ecommerce product description for:
Product: ${productName}
Keywords: ${keywords}
Tone: persuasive, concise, no markdown.`;

  try {
    console.log(productName, keywords)
    console.log(process.env.GEMINI_API_KEY)
    console.log(prompt)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );
    const data = await response.json();
    console.log(response.status)
    console.log(JSON.stringify(data,null,2));

    const description = data.candidates[0].content.parts[0].text;
    res.json({ description });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message:err.message,
      stack: err.stack,
    });
  }
});