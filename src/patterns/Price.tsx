import Tag from "../components/Tag"

function Price() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-11/12 sm:max-w-sm lg:max-w-none flex items-center justify-between my-6 lg:flex-col lg:items-start lg:gap-2">
        <div className="flex gap-4">
          <span className="font-kumbh font-bold text-3xl text-neutral-400">
            $125.00
          </span>
          <Tag>
            50
          </Tag>
        </div>

        <span className="text-neutral-200 text-base font-bold line-through font-kumbh">
          $250.00
        </span>
      </div>
    </div>
  )
}

export default Price