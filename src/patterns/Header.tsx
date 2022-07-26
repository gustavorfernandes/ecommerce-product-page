/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Hamburger from 'hamburger-react'
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"

function Header() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-11/12 flex justify-between items-center my-3">
        <div className="flex justify-center items-center">
          <span className="text-neutral-600 -ml-3 -mb-1">
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
          <AiOutlineShoppingCart
            className="font-[400] w-6 h-6 text-neutral-500"
          />

          <img
            className="h-6 w-6"
            src="/images/image-avatar.png"
            alt="Avatar"
          />
        </div>

      </div>
    </div>
  )
}

export default Header
