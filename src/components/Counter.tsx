function Counter() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-10/12 flex items-center justify-between  bg-neutral-100 rounded-lg py-3 px-5">
        <button className="font-kumbh font-bold text-orange-500 text-2xl">
          -
        </button>

        <span className="font-kumbh font-bold text-neutral-400">
          0
        </span>

        <button className="font-kumbh font-bold text-orange-500 text-2xl">
          +
        </button>
      </div>
    </div>
  )
}
export default Counter