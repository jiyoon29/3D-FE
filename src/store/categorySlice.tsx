import { Category, SubCategory } from '@/api/interface/category'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CategoryState {
  name: string
  count: number
  tagList: string[]
  subCategoryList: SubCategoryState[]
}

interface SubCategoryState {
  name: string
  count: number
  tagList: string[]
}

const initialState: CategoryState = {
  name: '',
  count: 0,
  tagList: [],
  subCategoryList: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectedCategory: (state, action: PayloadAction<Category>) => {
      state.name = action.payload.categoryName
      state.count = action.payload.categoryCount
      state.tagList = action.payload.tagList
      state.subCategoryList = action.payload.subCategoryList.map((subCategory) => ({
        name: subCategory.subCategoryName,
        count: subCategory.subCategoryCount,
        tagList: subCategory.tagList,
      }))
    },
  },
})

export const { selectedCategory } = categorySlice.actions
export default categorySlice.reducer
