import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import Counter from "../components/Counter"
import Slider from "../components/Slider"
import Description from "./Description"
import Price from "./Price"

function Product() {
  return (
    <div className="mb-20">
      <Slider />
      <Description />
      <Price />

      <div className="flex flex-col gap-3">
        <Counter />
        <div className="w-full flex items-center justify-center">
          <button
            className="w-10/12 bg-orange-500 rounded-lg py-3 shadow-button h-14"
          >
            <div className="flex items-center justify-center gap-4">
              <AiOutlineShoppingCart
                className="w-4 h-4 text-white"
              />
              <span className="text-white font-bold font-kumbh text-sm">
                Add to cart
              </span>
            </div>
          </button>
        </div>
      </div >
    </div>
  )
}

export default Product