import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  function addCount() {
    setCount(count + 1)
  }

  function removeCount() {
    if (count === 0) {
      return
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-10/12 flex items-center justify-between  bg-neutral-100 rounded-lg py-3 px-5">
        <button className="font-kumbh font-bold text-orange-500 text-2xl" onClick={removeCount}>
          -
        </button>

        <span className="font-kumbh font-bold text-neutral-400">
          {count}
        </span>

        <button className="font-kumbh font-bold text-orange-500 text-2xl" onClick={addCount}>
          +
        </button>
      </div>
    </div>
  )
}
export default Counter