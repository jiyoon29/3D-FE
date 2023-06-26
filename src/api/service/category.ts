/**
 * 카테고리 관련 API
 */
import { CategoryResponse } from '@/api/interface/category'
import { axiosInstance } from '../axios'

export const getAllCategories = async <T = CategoryResponse>(): Promise<T> => {
  const res = await axiosInstance.get<T>('/assets/count')
  return res.data
}
