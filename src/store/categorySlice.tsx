import { Category, SubCategory } from '@/api/interface/category'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CategoryState {
  name: string
  count: number
  tagList: string[]
  subCategoryList: SubCategoryState[]
  subName: string
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
  subName: '',
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<Category>) => {
      state.name = action.payload.categoryName
      state.count = action.payload.categoryCount
      state.tagList = action.payload.tagList
      state.subCategoryList = action.payload.subCategoryList.map((subCategory) => ({
        name: subCategory.subCategoryName,
        count: subCategory.subCategoryCount,
        tagList: subCategory.tagList,
      }))
    },
    selectSubCategory: (state, action: PayloadAction<string>) => {
      state.subName = action.payload
    },
  },
})

export const { selectCategory, selectSubCategory } = categorySlice.actions
export default categorySlice.reducer
