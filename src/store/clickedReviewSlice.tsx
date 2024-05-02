import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: { reviewId: number } = {
  reviewId: 0,
}

const clickedAssetSlice = createSlice({
  name: 'clickedReview',
  initialState,
  reducers: {
    setClickedReview: (state, action: PayloadAction<number>) => {
      state.reviewId = action.payload
    },
    clearClickedReivew: () => {
      return initialState
    },
  },
})

export const { setClickedReview, clearClickedReivew } = clickedAssetSlice.actions
export default clickedAssetSlice.reducer
