import { FieldValues } from 'react-hook-form'
import { ApiResponse } from '.'

/**
 * 결제, 결제 내역 관련 Interface
 */
export interface OrderHistory {
  orderId: number
  orderNumber: string
  orderDate: string
  totalPrice: number
  assetCount: number
}

export interface OrderHistoryDetail {
  assetId: number
  assetName: string
  extension: string
  price: number
  discountPrice: number
  size: number
}

export interface OrderHistoryData {
  orderHistoryList: OrderHistory[]
  currentPage: number
  totalPage: number
  totalElement: number
}

interface Categories {
  title: string
  tags: string[]
}

//주문 내역
export interface OrderHistoryResponseData extends FieldValues {
  data: [
    {
      orderId: number
      orderNumber: string
      orderDate: Date | string
      totalPrice: number
      assetCount: number
    },
  ]
}

//주문내역 상세보기
export interface OrderHistoryDetailResponseData extends FieldValues {
  data: {
    orderProductList: [
      {
        assetId: number
        assetName: string
        extension: string
        price: number
        discountPrice: number
        size: number
      },
    ]
  }
}

export type OrderHistoryResponse = ApiResponse<OrderHistoryResponseData>
export type OrderHistoryDetailResponse = ApiResponse<OrderHistoryDetailResponseData>
