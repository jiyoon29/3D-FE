import { axiosInstance } from '../axios'
import { AssetResponse } from '../interface/asset'
import { MyAssetResponse } from '../interface/myAsset'

/**
 * 내 에셋 관련 API
 */
export const getMyAssets = async <T = MyAssetResponse>(
  id: number,
  page: number,
  size: number,
): Promise<T> => {
  // const res = await axiosInstance.get<T>(`/s/user/${id}/assets?page=${page}`)
  const res = await axiosInstance.get<T>(`/s/user/${id}/assets?page=${page}&size=${size}`)
  return res.data
}
