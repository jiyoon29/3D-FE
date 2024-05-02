/**
 * 에셋 관련 API
 */

import { axiosInstance } from '../axios'
import { AssetDetailResponse, AssetResponse } from '../interface/asset'

export const getAssets = async <T = AssetResponse>(page: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets?page=${page}`)
  return res.data
}

export const getAssetDetail = async <T = AssetDetailResponse>(id: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${id}/details`)
  return res.data
}

export const getSubCategories = async <T = AssetResponse>(
  page: number,
  category: string,
  subCategory: string,
): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${category}/${subCategory}?page=${page}`)
  return res.data
}

export const getCategories = async <T = AssetResponse>(
  page: number,
  categoryname: string,
): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${categoryname}?page=${page}`)
  return res.data
}
