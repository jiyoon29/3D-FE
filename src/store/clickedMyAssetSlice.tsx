import { Asset } from '@/api/interface/asset'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: { assetId: number } = {
  assetId: 0,
}

const clickedMyAssetSlice = createSlice({
  name: 'clickedMyAsset',
  initialState,
  reducers: {
    setClickedMyAsset: (state, action: PayloadAction<number>) => {
      state.assetId = action.payload
    },
    clearMyAsset: () => {
      return initialState
    },
  },
})

export const { setClickedMyAsset, clearMyAsset } = clickedMyAssetSlice.actions
export default clickedMyAssetSlice.reducer
