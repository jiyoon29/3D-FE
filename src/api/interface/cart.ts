import { ApiResponse } from '.'

export interface CartItemProps {
  item: SelectedItem
}

export interface SelectedItem {
  cartId: number
  asset: Asset
  orderId: number | null
  wishListId: number | null
}

export interface Asset {
  assetId: number
  assetName: string
  price: number
  discount: number
  discountPrice: number
  extension: string
  size: number
  thumbnailUrl: string
}

export interface CartDeleteRequest {
  userId: number
  carts: number[]
}

export interface CartDeleteResponseData {
  data: null
}

export type CartDeleteResponse = ApiResponse<CartDeleteResponseData>

// 장바구니 추가
export interface CartAddRequest {
  userId: number
  assets: number[]
}

export interface CartAddResponseData {
  data: null
}

export type CartAddResponse = ApiResponse<CartAddResponseData>
