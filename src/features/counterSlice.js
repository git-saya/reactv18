import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

//buat slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      state.counter -= 1;
    },
    reset: (state, action) => {
      state.counter = 0;
    },
    addCounter: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, addCounter, reset } = counterSlice.actions;
export default counterSlice;
