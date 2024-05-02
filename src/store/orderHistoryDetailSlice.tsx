import { createSlice } from '@reduxjs/toolkit'

export interface OrderHistoryDetailState {
  isShow: boolean
}

const initialState: OrderHistoryDetailState = {
  isShow: false,
}

const orderHistoryDetailSlice = createSlice({
  name: 'orderHistoryDetail',
  initialState,
  reducers: {
    showOrderHistoryDetail: (state) => {
      state.isShow = true
    },
    hideOrderHistoryDetail: (state) => {
      state.isShow = false
    },
  },
})

export const { showOrderHistoryDetail, hideOrderHistoryDetail } = orderHistoryDetailSlice.actions
export default orderHistoryDetailSlice.reducer
