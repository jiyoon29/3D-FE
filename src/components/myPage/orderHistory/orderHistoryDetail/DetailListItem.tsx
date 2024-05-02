/**
 * 마이페이지-주문내역-주문내역상세-주문상품 내역 중 에셋
 */
import React from 'react'
import Image from 'next/image'
import { formatPrice } from '@/utils/formatPrice'
import { OrderHistoryDetailResponse } from '@/api/interface/payment'

interface OrderHistoryDetailProps {
  detailInfo: OrderHistoryDetailResponse
}

export default function DetailListItem({ detailInfo }: OrderHistoryDetailProps) {
  return (
    <>
      <td className="flex justify-between px-4 pb-4 pt-8">
        <Image src="/image.svg" alt="asset" width={80} height={100} className="min-w-[8rem]" />
        <div className="p-[1.3rem]">
          <h4 className="text-[2.2rem]">Run</h4>
          <ul className="flex flex-wrap items-center text-sm">
            <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem] after:w-[0.1rem] after:bg-transparent-navy-30">
              확장자 : {detailInfo.data.orderDetail.extension}
            </li>
            <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem]">
              데이터 용량 : {detailInfo.data.orderDetail.size}GB
            </li>
          </ul>
        </div>
        <div className="p-[2.4rem] text-right text-sl">
          <p>{formatPrice(detailInfo.data.orderDetail.price)}</p>
          <p className="text-mm font-normal text-neutral-navy-800 line-through">
            {formatPrice(detailInfo.data.orderDetail.discountPrice)}
          </p>
        </div>
      </td>
    </>
  )
}
