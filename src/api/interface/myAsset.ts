import { type } from 'os'
import { FieldValues } from 'react-hook-form'
import { ApiResponse } from '.'

export interface MyAssets extends FieldValues {
  data: {
    myAssetList: Array<{
      orderId: number
      orderNumber: string
      orderDate: Date | string
      totalPrice: number
      assetCount: number
    }>
    size: number
    currentPage: number
    totalPage: number
    totalElement: number
  }
}

export type MyAssetResponse = ApiResponse<MyAssets>
