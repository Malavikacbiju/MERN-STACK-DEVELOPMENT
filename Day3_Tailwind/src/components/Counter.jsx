import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className='w-full max-w-sm rounded-2xl border border-gray-200 bg-slate-50 p-5 shadow-sm'>
      <div className='mb-4 rounded-xl border border-gray-200 bg-white p-4 text-center'>
        <p className='text-sm font-medium uppercase tracking-wide text-gray-500'>Counter</p>
        <h2 className='mt-1 text-3xl font-semibold text-gray-800'>{count}</h2>
      </div>

      <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
        <button
          onClick={handleIncrement}
          className='w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto'
        >
          Increment
        </button>
        <button
          onClick={handleReset}
          className='w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 sm:w-auto'
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter