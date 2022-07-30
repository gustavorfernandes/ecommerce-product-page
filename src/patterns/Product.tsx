/* eslint-disable @next/next/no-img-element */
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import Counter from "../components/Counter"
import { Slider, SliderProps, Slide } from '../utils/slider-imports'
import Description from "./Description"
import Price from "./Price"
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from '../store/cartSlice'
import { removeAll } from '../store/counterSlice'

function Product() {
  const settings: SliderProps = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    navigation: true,
  }

  let count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  function clearCounter() {
    dispatch(removeAll())
  }

  return (
    <div className="mb-20">

      <Slider settings={settings}>
        <Slide>
          <img
            className="w-full h-80 select-none"
            src="/images/image-product-1.jpg"
            alt="Product 01"
          />
        </Slide>
        <Slide>
          <img
            className="w-full h-80 select-none"
            src="/images/image-product-2.jpg"
            alt="Product 02"
          />
        </Slide>
        <Slide>
          <img
            className="w-full h-80 select-none"
            src="/images/image-product-3.jpg"
            alt="Product 03"
          />
        </Slide>
        <Slide>
          <img
            className="w-full h-80 select-none"
            src="/images/image-product-4.jpg"
            alt="Product 04"
          />
        </Slide>
      </Slider>

      <Description />

      <Price />

      <div className="flex flex-col gap-3">
        <Counter />
        <div className="w-full flex items-center justify-center">
          <button
            className="w-10/12 bg-orange-500 hover:bg-orange-400 transition-all rounded-lg py-3 shadow-button h-14"
            onClick={() => {
              dispatch(incrementByAmount(count))
              clearCounter()
            }}
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