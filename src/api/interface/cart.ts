import { ApiResponse } from '.'

export interface CartItemProps {
  item: {
    cartId: number
    asset: {
      assetId: number
      assetName: string
      price: number
      discount: number
      discountPrice: number
      extension: string
      size: number
    }
    orderId: number | null
    wishListId: number | null
  }
}

export interface CartDeleteRequest {
  userId: number
  carts: number[]
}

export type CartDeleteResponse = ApiResponse<any>
