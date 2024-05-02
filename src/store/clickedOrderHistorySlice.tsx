import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: { orderHistoryId: number } = {
  orderHistoryId: 0,
}

const clickedOrderHistoryReducer = createSlice({
  name: 'clickedOrderHistory',
  initialState,
  reducers: {
    setClickedOrderHistory: (state, action: PayloadAction<number>) => {
      state.orderHistoryId = action.payload
    },
    clearOrderHistory: () => {
      return initialState
    },
  },
})

export const { setClickedOrderHistory, clearOrderHistory } = clickedOrderHistoryReducer.actions
export default clickedOrderHistoryReducer.reducer
