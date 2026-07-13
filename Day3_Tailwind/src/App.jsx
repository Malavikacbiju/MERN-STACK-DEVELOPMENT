import React from 'react'
import Userbadge from './components/Uesrbadge.jsx'
import jon from './assets/img1.jpeg'
import don from './assets/img2.jpeg'
import Counter from './components/Counter.jsx'
import Product from './components/product.jsx'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8'>
        <div className='flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:items-stretch'>
          <Userbadge name='jon' role='Project Lead' image={jon} />
          <Userbadge name='don' role='Software Lead' image={don} />
        </div>

        <Counter />
        <Product />
      </div>
    </div>
  )
}

export default App