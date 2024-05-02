import { Asset } from '@/api/interface/asset'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: { assetId: number } = {
  assetId: 0,
}

const clickedAssetSlice = createSlice({
  name: 'clickedAsset',
  initialState,
  reducers: {
    setClickedAsset: (state, action: PayloadAction<number>) => {
      state.assetId = action.payload
    },
    clearAsset: () => {
      return initialState
    },
  },
})

export const { setClickedAsset, clearAsset } = clickedAssetSlice.actions
export default clickedAssetSlice.reducer
