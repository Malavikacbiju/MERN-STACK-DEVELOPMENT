import React from 'react'
import Products from './componets/Products'
import AddProduct from './componets/AddProduct'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <nav className='bg-amber-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ul className='flex space-x-6 py-4'>
          <li>
            <NavLink to='/products' className='text-white hover:text-gray-300'>Products</NavLink>
          </li>
          <li>
            <NavLink to='/addproduct' className='text-white hover:text-gray-300'>Add Product</NavLink>
          </li>
          <li>
            <NavLink to='/' className='text-white hover:text-gray-300'>Home</NavLink>
          </li>
        </ul>

      </div>

    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/addproduct' element={<AddProduct />} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App