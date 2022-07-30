import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1
      }
    },
    removeAll: (state) => {
      state.value = 0
    },
  },
})

export const { increment, decrement, removeAll } = counterSlice.actions

export default counterSlice.reducer
