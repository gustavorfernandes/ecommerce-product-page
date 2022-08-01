/* eslint-disable @next/next/no-img-element */
import { useState, useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Squash as Hamburger } from 'hamburger-react'
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import { AnimatePresence, motion } from 'framer-motion'
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

  const { cartCounter, clearCart }: any = useContext(CartContext)
  const finalPrice = cartCounter * 125

  return (
    <>
      <AnimatePresence>
        {(menu) &&
          <>
            <motion.div
              className="bg-white fixed self-start w-8/12 sm:w-4/12 h-full z-20"
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
              className="bg-white fixed rounded-lg w-11/12 max-w-[340px] lg:max-w-none lg:w-3/12 h-64 z-20 inset-y-20 lg:inset-0 lg:absolute lg:top-20 lg:left-[65%] xl:left-[69%] lg:min-w-[350px] shadow-box"
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
                  {cartCounter === 0 ?
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
                            <h2>
                              Autumn Limited Edition...
                            </h2>

                            <div className="flex gap-2 justify-start items-center">
                              <span>
                                $125.00
                              </span>
                              <span>
                                x {cartCounter}
                              </span>
                              <span className="text-neutral-400 font-bold">
                                ${finalPrice}.00
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            clearCart()
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

      <div className="w-screen flex items-center justify-center select-none">
        <div className="w-11/12 lg:w-10/12 flex justify-between items-center my-3 lg:my-0 lg:border-b lg:py-8 lg:mb-24">
          <div className="flex justify-center items-center">
            <span className={`text-neutral-600 -ml-3 -mb-1 ${cart ? "z-0" : "z-30"} lg:hidden`}>
              <Hamburger
                size={20}
                rounded
                label="Show menu"
                toggled={menu}
                toggle={setMenu}
              />
            </span>

            <img
              className="w-32 h-5 lg:mr-12"
              src="/images/logo.svg"
              alt="Sneakers"
            />


            <nav>
              <ul className="hidden lg:flex gap-8 font-kumbh text-neutral-300">
                <li>
                  <a className="cursor-pointer hover:border-b-4 hover:text-neutral-400 hover:border-orange-400 lg:pb-[1.9rem] xl:pb-[2.4rem] transition-all">
                    Collections
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:border-b-4 hover:text-neutral-400 hover:border-orange-400 lg:pb-[1.9rem] xl:pb-[2.4rem] transition-all">
                    Men
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:border-b-4 hover:text-neutral-400 hover:border-orange-400 lg:pb-[1.9rem] xl:pb-[2.4rem] transition-all">
                    Women
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:border-b-4 hover:text-neutral-400 hover:border-orange-400 lg:pb-[1.9rem] xl:pb-[2.4rem] transition-all">
                    About
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:border-b-4 hover:text-neutral-400 hover:border-orange-400 lg:pb-[1.9rem] xl:pb-[2.4rem] transition-all">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex justify-center items-center gap-6">
            <button
              id={cartCounter.toString()}
              className={`relative before:px-2 before:absolute before:-top-1 before:left-3 before:rounded-3xl before:text-[10px] before:font-kumbh before:text-white before:font-bold
              before:content-[attr(id)] before:bg-orange-500 ${cartCounter === 0 ? "before:hidden text-neutral-500" : "text-neutral-400"} xl:mr-4 xl:hover:text-neutral-400`}
              onClick={toggleCart}
            >
              <AiOutlineShoppingCart
                className={`font-[400] w-6 h-6 transition-all ${cart === true && "text-neutral-400"}`}
              />
            </button>

            <div className="h-6 w-6 xl:h-10 xl:w-10 hover:border-orange-500 duration-150 rounded-full border-2">
            <img
              className="lg:hover:cursor-pointer"
              src="/images/image-avatar.png"
              alt="Avatar"
            />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header
