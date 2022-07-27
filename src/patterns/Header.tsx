/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { Squash as Hamburger } from 'hamburger-react'
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import { AnimatePresence, motion } from 'framer-motion'

function Header() {
  const [isOpen, setOpen] = useState(false)

  function closeMenu() {
    setOpen(false)
  }

  return (
    <>
      <AnimatePresence>
        {(isOpen) &&
          <>
            <motion.div
              className="bg-white fixed self-start w-8/12 h-full z-20"
              initial={{ x: -300 }}
              animate={{ x: - 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.5 }}
              onBlur={closeMenu}
            >
              <nav>
                <ul className="flex flex-col gap-4 pt-24 pl-9 font-kumbh text-neutral-400 font-bold text-lg duration-[5ms]">
                  <li>
                    <a onClick={closeMenu}>
                      Collections
                    </a>
                  </li>
                  <li>
                    <a onClick={closeMenu}>
                      Men
                    </a>
                  </li>
                  <li>
                    <a onClick={closeMenu}>
                      Women
                    </a>
                  </li>
                  <li>
                    <a onClick={closeMenu}>
                      About
                    </a>
                  </li>
                  <li>
                    <a onClick={closeMenu}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </motion.div>
            <div
              id="Overlay"
              className="z-10 fixed inset-0"
              onClick={closeMenu}
            />
          </>
        }
      </AnimatePresence>

      <div className="w-full flex items-center justify-center select-none">
        <div className="w-10/12 flex justify-between items-center my-3">
          <div className="flex justify-center items-center">
            <span className="text-neutral-600 -ml-3 -mb-1 z-30">
              <Hamburger
                size={20}
                rounded
                label="Show menu"
                toggled={isOpen}
                toggle={setOpen}
              />
            </span>

            <img
              className="w-32 h-5"
              src="/images/logo.svg"
              alt="Sneakers"
            />
          </div>

          <div className="flex justify-center items-center gap-6">

            <button>
              <AiOutlineShoppingCart
                className="font-[400] w-6 h-6 text-neutral-500"
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
