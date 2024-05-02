/**
 * 마이페이지-주문내역-주문내역상세-주문상품 내역 중 에셋
 */
import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { OrderHistoryDetailResponse } from '@/api/interface/payment'
import { formatPrice } from '@/utils/formatPrice'
import { RootState } from '@/store/store'
import { useOrderHistoryDetail } from '@/hooks/useMyPage'
import DetailListItem from './DetailListItem'
import Loading from '@/app/loading'

interface OrderHistoryDetailProps {
  detailInfo: OrderHistoryDetailResponse | undefined
}

export default function MyOrderDetail({ detailInfo }: OrderHistoryDetailProps) {
  const { orderHistoryId } = useSelector((state: RootState) => state.clickedOrderHistory)
  const { orderHistoryDetail } = useOrderHistoryDetail(orderHistoryId)

  if (!orderHistoryId || !detailInfo) {
    return
  }

  return (
    <div className="mt-8 h-96 w-full">
      <tr className="flex flex-col">
        <p className="mb-6 flex text-[1.8rem] font-normal">주문상품</p>
        <td className="flex h-[4rem] w-[100%] justify-between bg-bg-3 px-[5rem] text-[1.4rem] font-normal text-neutral-100">
          <p className="flex w-[45%] items-center">
            결제수단 : {detailInfo.data.orderDetail.paymentTool}
          </p>
          <div className="flex w-[38%] items-center justify-between py-4 text-[1.15rem]">
            <Image src="/icons/plus.svg" alt="plus" width={18} height={18} />
            <p>상품금액</p>
            <p>{formatPrice(detailInfo.data.orderProductList.price)}</p>
            <Image src="/icons/minus.svg" alt="minus" width={18} height={18} />
            <p>할인금액</p>
            <p>{formatPrice(detailInfo.data.orderProductList.discountPrice)}</p>
            <Image src="/icons/equal.svg" alt="equal" width={18} height={18} />
          </div>
          <p className="flex items-center">
            <p className="mr-2">결제 금액</p>
            <p className="text-[2rem]">{formatPrice(detailInfo.data.orderDetail.totalPrice)}</p>
          </p>
        </td>
      </tr>
      <tr>
        {/* <DetailListItem detailInfo={orderHistoryDetail} /> */}

        <td className="flex justify-between px-4 pb-4 pt-8">
          {detailInfo.data.orderProductList.thumbnailUrl}
          {/* <Image src="/image.svg" alt="asset" width={80} height={100} className="min-w-[8rem]" /> */}

          <div className="p-[1.3rem]">
            <h4 className="text-[2.2rem]">Run</h4>
            <ul className="flex flex-wrap items-center text-sm">
              <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem] after:w-[0.1rem] after:bg-transparent-navy-30">
                확장자 : {detailInfo.data.orderProductList.extension}
              </li>
              <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem]">
                데이터 용량 : {detailInfo.data.orderProductList.size}GB
              </li>
            </ul>
          </div>
          <div className="p-[2.4rem] text-right text-sl">
            <p>{formatPrice(detailInfo.data.orderProductList.price)}</p>
            <p className="text-mm font-normal text-neutral-navy-800 line-through">
              {formatPrice(detailInfo.data.orderProductList.discountPrice)}
            </p>
          </div>
        </td>
      </tr>
    </div>
  )
}
