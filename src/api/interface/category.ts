/**
 * 카테고리 Interface
 */

import { ApiResponse } from '.'

export interface Category {
  categoryName: string
  categoryCount: number
  tagList: string[]
  subCategoryList: SubCategory[]
}

export interface SubCategory {
  subCategoryName: string
  subCategoryCount: number
  tagList: string[]
}

export type CategoryResponse = ApiResponse<{ categoryList: Category[] }>
