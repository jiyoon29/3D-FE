import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { formatPrice } from '@/utils/formatPrice'
import { OrderProductList } from '@/api/interface/payment'

export default function CompleteItem({ item }: { item: OrderProductList }) {
  return (
    <tr className="border-b border-transparent-navy-15">
      <td className="py-[0.8rem]">
        <Image
          src={`https://asset-store-bucket.s3.ap-northeast-2.amazonaws.com/asset-store-bucket/${item.thumbnailUrl}`}
          alt="asset"
          width={80}
          height={100}
          className="min-w-[8rem]"
        />
      </td>
      <td>
        <div className="px-[1.2rem]">
          <h4 className="text-[2rem] font-bold">{item.assetName}</h4>
          <ul className="flex flex-wrap items-center text-sm">
            <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem] after:w-[0.1rem] after:bg-transparent-navy-30">
              확장자 : {item.extension}
            </li>
            <li className="flex items-center">데이터 용량 : {item.size}KB</li>
          </ul>
        </div>
      </td>
      <td>
        <div className="px-[2.4rem] text-right text-sl">
          <p>{formatPrice(item.discountPrice)}</p>
          {item.discountPrice !== item.price && (
            <p className="text-mm font-normal text-neutral-navy-800 line-through">
              {formatPrice(item.price)}
            </p>
          )}
        </div>
      </td>
    </tr>
  )
}
