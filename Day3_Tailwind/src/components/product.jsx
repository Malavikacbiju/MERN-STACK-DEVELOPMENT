import React from 'react'
import axios from 'axios'
import {useState,useEffect}from 'react'


const Products = () => {
    const [data,setData]=useState([])
    const url = "https://fakestoreapi.com/products"

    useEffect (()=>{
        const fecthData =async()=>{
            try{
                const response = await axios.get(url)
                console.log(response.data)
                setData(response.data)
            }catch(error){
                console.log(error)

            }

        }
        fecthData()


    },[])
  return (
    <div>
        <ul>
            {
                data.map((product) => (
                    <li key={product.id}>{product.title} </li>

                ))
        
                
            }
        </ul>
        
        Products</div>
  )
}

export default Products