import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  value: number
}

const initialState: CartState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {   
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    removeAll: (state) => {
      state.value = 0
    },
  },
})

export const { incrementByAmount, removeAll } = cartSlice.actions

export default cartSlice.reducer
