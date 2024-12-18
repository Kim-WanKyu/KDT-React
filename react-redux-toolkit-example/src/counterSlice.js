import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {value:0},
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload.step;
    },
    down: (state, action) => {
      state.value = state.value - action.payload.step;
    }
  }
});

export default counterSlice;
export const {up, down} = counterSlice.actions;
