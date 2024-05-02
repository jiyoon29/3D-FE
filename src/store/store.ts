import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './drawerSlice'
import clickedAssetReducer from './clickedAssetSlice'
import clickedReviewReducer from './clickedReviewSlice'
import categoryReducer from './categorySlice'
import tagReducer from './tagSlice'
import cartReducer from './cartSlice'
import userReducer from './userSlice'
import clickedOrderHistoryReducer from './clickedOrderHistorySlice'

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    clickedAsset: clickedAssetReducer,
    clickedReview: clickedReviewReducer,
    category: categoryReducer,
    tag: tagReducer,
    cart: cartReducer,
    user: userReducer,
    clickedOrderHistory: clickedOrderHistoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
