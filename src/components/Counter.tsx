import React, { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

function Counter() {
  const { counter, incrementCounter, decrementCounter }: any = useContext(CartContext)

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-10/12 flex items-center justify-between  bg-neutral-100 rounded-lg py-3 px-5">
        <button
          className="font-kumbh font-bold text-orange-500 hover:text-orange-400 transition-all text-2xl"
          onClick={() => decrementCounter()}
        >
          -
        </button>

        <span className="font-kumbh font-bold text-neutral-400">
          {counter}
        </span>

        <button 
          className="font-kumbh font-bold text-orange-500 hover:text-orange-400 transition-all text-2xl"
          onClick={() => incrementCounter()}
        >
          +
        </button>
      </div>
    </div>
  )
}
export default Counter
