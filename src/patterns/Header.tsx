/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { Squash as Hamburger } from 'hamburger-react'
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import { AnimatePresence, motion } from 'framer-motion'
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { removeAll } from '../store/cartSlice'
import Link from "next/link"

function Header() {
  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState(false)

  function toggleMenu() {
    setMenu(!menu)
  }

  function toggleCart() {
    setCart(!cart)
  }

  const cartCount = useSelector((state: RootState) => state.cart.value)
  const finalPrice = cartCount * 125
  const dispatch = useDispatch()

  return (
    <>
      <AnimatePresence>
        {(menu) &&
          <>
            <motion.div
              className="bg-white fixed self-start w-8/12 h-full z-20"
              initial={{ x: -300 }}
              animate={{ x: - 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.5 }}
              onBlur={toggleMenu}
            >
              <nav>
                <ul className="flex flex-col gap-4 pt-24 pl-9 font-kumbh text-neutral-400 font-bold text-lg duration-[5ms]">
                  <li>
                    <a
                      className="cursor-pointer hover:border-b-4 hover:border-orange-400 pb-1 transition-all"
                      onClick={toggleMenu}>
                      Collections
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer hover:border-b-4 hover:border-orange-400 pb-1 transition-all"
                      onClick={toggleMenu}>
                      Men
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer hover:border-b-4 hover:border-orange-400 pb-1 transition-all"
                      onClick={toggleMenu}>
                      Women
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer hover:border-b-4 hover:border-orange-400 pb-1 transition-all"
                      onClick={toggleMenu}>
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer hover:border-b-4 hover:border-orange-400 pb-1 transition-all"
                      onClick={toggleMenu}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </motion.div>
            <div
              id="Overlay"
              className="z-10 fixed inset-0"
              onClick={toggleMenu}
            />
          </>
        }

        {(cart) &&
          <div className="flex items-center justify-center">
            <motion.div
              className="bg-white fixed rounded-lg w-11/12 h-64 z-20 inset-y-20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              onBlur={toggleMenu}
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full flex items-start p-5 h-16 border-b">
                  <span className="font-kumbh font-bold text-neutral-400 text-lg select-none">
                    Cart
                  </span>
                </div>

                <div className="flex w-full h-full items-center justify-center">
                  {cartCount === 0 ?
                    <h2 className="font-kumbh font-bold text-neutral-300">
                      Your cart is empty.
                    </h2>
                    :
                    <div className="w-full px-6 flex flex-col items-center justify-center gap-6">
                      <div className="w-full flex items-center justify-between gap-4">
                        <div className="flex gap-4">
                          <img
                            className="w-12 rounded"
                            src="/images/image-product-1-thumbnail.jpg"
                            alt="Produto"
                          />

                          <div className="font-kumbh text-neutral-300 flex flex-col">
                            <h2 className="">
                              Autumn Limited Edition...
                            </h2>

                            <div className="flex gap-2 justify-start items-center">
                              <span>
                                $125.00
                              </span>
                              <span>
                                x {cartCount}
                              </span>
                              <span className="text-neutral-400 font-bold">
                                ${finalPrice}.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            dispatch(removeAll())
                            toggleCart()
                          }}
                        >
                          <img
                            className="select-none"
                            src="/images/icon-delete.svg"
                            alt="Apagar"
                          />
                        </button>
                      </div>
                      <button
                        className="text-white text-sm font-bold font-kumbh w-full bg-orange-500 rounded-lg py-4"
                        onClick={toggleCart}
                      >
                        <Link href="/">
                          <a>Checkout</a>
                        </Link>
                      </button>
                    </div>
                  }
                </div>
              </div>

            </motion.div>

            <div
              id="Overlay"
              className="z-10 fixed inset-0"
              onClick={toggleCart}
            />
          </div>
        }
      </AnimatePresence>

      <div className="w-full flex items-center justify-center select-none">
        <div className="w-10/12 flex justify-between items-center my-3">
          <div className="flex justify-center items-center">
            <span className={`text-neutral-600 -ml-3 -mb-1 ${cart ? "z-0" : "z-30"}`}>
              <Hamburger
                size={20}
                rounded
                label="Show menu"
                toggled={menu}
                toggle={setMenu}
              />
            </span>

            <img
              className="w-32 h-5"
              src="/images/logo.svg"
              alt="Sneakers"
            />
          </div>

          <div className="flex justify-center items-center gap-6">

            <button
              id={cartCount.toString()}
              className={`relative before:px-2 before:absolute before:-top-1 before:left-3 before:rounded-3xl before:text-[10px] before:font-kumbh before:text-white before:font-bold
              before:content-[attr(id)] before:bg-orange-500 ${cartCount === 0 ? "before:hidden text-neutral-500" : "text-neutral-400"}`}
              onClick={toggleCart}
            >
              <AiOutlineShoppingCart
                className={`font-[400] w-6 h-6 transition-all ${cart === true && "text-neutral-400"}`}
              />              
            </button>

            <img
              className="h-6 w-6"
              src="/images/image-avatar.png"
              alt="Avatar"
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Header
