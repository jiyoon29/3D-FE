import { UserId } from '@/api/interface/auth'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserId = {
  userId: 0,
}

const userSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    setUser: (state: UserId, action: PayloadAction<number>) => {
      state.userId = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
