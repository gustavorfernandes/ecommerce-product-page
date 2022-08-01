/* eslint-disable @next/next/no-img-element */
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import Counter from "../components/Counter"
import { Slider, SliderProps, Slide } from '../utils/slider-imports'
import Description from "./Description"
import Price from "./Price"
import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { AnimatePresence, motion } from 'framer-motion'

function Product() {
  const { counter, addItemsToCart, clearCounter }: any = useContext(CartContext)
  const [photoID, setPhotoID] = useState(1)
  const [sliderActive, setSliderActive] = useState(false)

  const settingsMobile: SliderProps = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    navigation: true,
    pagination: false,
  }

  const settings: SliderProps = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    navigation: true,
    pagination: {
      type: 'bullets',
    }
  }

  function togglePhoto(photoID: number) {
    setPhotoID(photoID)
  }

  function toggleSlider(photoID: number) {
    setSliderActive(!sliderActive)
    togglePhoto(photoID)
  }

  return (
    <div className="w-screen flex items-center justify-center">
      <div className="w-full flex flex-col sm:max-w-sm lg:max-w-none lg:flex-row lg:w-9/12 items-center lg:justify-between lg:gap-8">
        <div className="lg:hidden flex items-center justify-center w-full m-auto lg:m-0">
          <Slider settings={settingsMobile}>
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
        </div>

        <div className="hidden lg:flex flex-col justify-center items-start w-6/12 gap-8">
          <button onClick={() => {            
            toggleSlider(photoID)
          }}>
            <img
              className="rounded-2xl w-[22rem] xl:w-[30rem] cursor-pointer"
              src={`/images/image-product-${photoID}.jpg`}
              alt="Featured Product"
            />
          </button>

          <div className="flex gap-8 justify-center items-center">
            <button onClick={() => togglePhoto(1)}>
              <div className={`overflow-hidden rounded-xl transition-all border-2 w-16 xl:w-24 cursor-pointer ${(photoID === 1) && "border-2 border-orange-500"}`}>
                <img
                  className={`hover:opacity-50 transition-all ${(photoID === 1) && "opacity-50"}`}
                  src="/images/image-product-1-thumbnail.jpg"
                  alt="Product 01"
                />
              </div>
            </button>
            <button onClick={() => togglePhoto(2)}>
              <div className={`overflow-hidden rounded-xl transition-all border-2 w-16 xl:w-24 cursor-pointer ${(photoID === 2) && "border-2 border-orange-500"}`}>
                <img
                  className={`hover:opacity-50 transition-all ${(photoID === 2) && "opacity-50"}`}
                  src="/images/image-product-2-thumbnail.jpg"
                  alt="Product 02"
                />
              </div>
            </button>
            <button onClick={() => togglePhoto(3)}>
              <div className={`overflow-hidden rounded-xl transition-all border-2 w-16 xl:w-24 cursor-pointer ${(photoID === 3) && "border-2 border-orange-500"}`}>
                <img
                  className={`hover:opacity-50 transition-all ${(photoID === 3) && "opacity-50"}`}
                  src="/images/image-product-3-thumbnail.jpg"
                  alt="Product 03"
                />
              </div>
            </button>
            <button onClick={() => togglePhoto(4)}>
              <div className={`overflow-hidden rounded-xl transition-all border-2 w-16 xl:w-24 cursor-pointer ${(photoID === 4) && "border-2 border-orange-500"}`}>
                <img
                  className={`hover:opacity-50 transition-all ${(photoID === 4) && "opacity-50"}`}
                  src="/images/image-product-4-thumbnail.jpg"
                  alt="Product 04"
                />
              </div>
            </button>
          </div>

          <AnimatePresence>

            {(sliderActive) &&

              <>
                <div className="fixed z-20 h-5/12 inset-0 flex flex-col gap-4 justify-center items-center">
                  <div className="w-5/12 flex flex-col justify-center items-center gap-4">
                    <motion.div
                      className="w-full flex flex-col justify-center items-center gap-4"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}

                    >
                      <div
                        className="self-end"
                        onClick={() => {
                          toggleSlider(photoID)
                        }}>
                        <img
                          className="w-6 z-20 cursor-pointer select-none"
                          src="/images/icon-close.svg"
                          alt="Close"
                        />
                      </div>

                      <div className="flex w-full select-none rounded-lg">
                        <Slider settings={settings}>
                          <Slide>
                            <img
                              className="rounded-lg"
                              src="/images/image-product-1.jpg"
                              alt="Product 1"
                            />
                          </Slide>
                          <Slide>
                            <img
                              className="rounded-lg"
                              src="/images/image-product-2.jpg"
                              alt="Product 2"
                            />
                          </Slide>
                          <Slide>
                            <img
                              className="rounded-lg"
                              src="/images/image-product-3.jpg"
                              alt="Product 3"
                            />
                          </Slide>
                          <Slide>
                            <img
                              className="rounded-lg"
                              src="/images/image-product-4.jpg"
                              alt="Product 4"
                            />
                          </Slide>
                        </Slider>
                      </div>                          
                 
                    </motion.div>
                  </div>
                </div>
                <div id="Overlay" className="bg-neutral-900 z-10 fixed inset-0 opacity-80" />
              </>
            }
          </AnimatePresence>

        </div>

        <div className="mb-16 lg:m-0 w-11/12 lg:w-6/12 lg:flex lg:flex-col lg:items-start">

          <Description />

          <Price />

          <div className="flex flex-col lg:flex-row gap-3 lg:w-11/12 lg:justify-center lg:gap-2 lg:self-center">
            <Counter />
            <div className="w-full lg:w-11/12 flex items-center justify-center">
              <button
                className="w-11/12 sm:max-w-sm lg:max-w-none lg:w-full bg-orange-500 hover:bg-orange-400 transition-all rounded-lg py-3 shadow-button h-14"
                onClick={() => {
                  addItemsToCart(counter)
                  clearCounter()
                }}
              >
                <div className="flex items-center justify-center gap-4">
                  <AiOutlineShoppingCart
                    className="w-4 h-4 text-white"
                  />
                  <span className="text-white font-bold font-kumbh text-sm xl:text-base">
                    Add to cart
                  </span>
                </div>
              </button>
            </div>
          </div >
        </div>
      </div>
    </div >
  )
}

export default Product
