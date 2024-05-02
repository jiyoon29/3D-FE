/**
 * 카테고리 관련 API
 */
import { readFile } from 'fs/promises'
import path from 'path'
import { Category } from '@/api/interface/category'

// export async function getAllCategories(): Promise<Category[]> {
//   const filePath = path.join(process.cwd(), 'src', 'data', 'category.json')
//   return readFile(filePath, 'utf-8').then<Category[]>(JSON.parse)
// }

export const getAllCategories = async (): Promise<Category[]> => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'category.json')
  return readFile(filePath, 'utf-8').then(JSON.parse)
}

/**
 * 카테고리 관련 API
 */
// import { CategoryResponse } from '@/api/interface/category'
// import { axiosInstance } from '../axios'

// export const getAllCategory = async <T = CategoryResponse>(): Promise<T> => {
//   const res = await axiosInstance.get<T>('/assets/count')
//   return res.data
// }
