import { ApiResponse } from '.'

export interface Asset {
  assetId: number
  assetName: string
  price: number
  discount: number
  discountPrice: string
  releaseDate: string
  thumbnailUrl: string
  rating: number
  reviewCount: number
  wishCount: number
  wishlistId: number | null
  cartId: number | null
}

export interface AssetDetail {
  assetId: number
  assetName: string
  creator: string
  description: string
  discount: number
  discountPrice: number
  extension: string
  fileSize: number
  fileUrl: string
  previewList: []
  price: number
  rating: number
  reviewCount: number
  tagList: string[]
  wishCount: number
  wishlistId: number
  visitCount: number
}

interface AssetData {
  assetList: Asset[]
  size: number
  currentPage: number
  totalPage: number
  totalElement: number
}

export type AssetDetailResponse = ApiResponse<AssetDetail>

export type AssetResponse = ApiResponse<AssetData>
