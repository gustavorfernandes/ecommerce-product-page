import React from "react"
import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../app/counterSlice'

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-10/12 flex items-center justify-between  bg-neutral-100 rounded-lg py-3 px-5">
        <button
          className="font-kumbh font-bold text-orange-500 hover:text-orange-400 transition-all text-2xl"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <span className="font-kumbh font-bold text-neutral-400">
          {count}
        </span>

        <button 
          className="font-kumbh font-bold text-orange-500 hover:text-orange-400 transition-all text-2xl"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  )
}
export default Counter