import React from 'react'
import Image from 'next/image'
import { formatPrice } from '@/utils/formatPrice'
import { CartItemProps } from '@/api/interface/cart'

interface PaymentItemProps {
  item: CartItemProps['item']
}

export default function PaymentItem({ item }: PaymentItemProps) {
  return (
    <li className="flex items-center px-[0.4rem] py-[0.65rem]">
      <div>
        <Image
          src={`https://asset-store-bucket.s3.ap-northeast-2.amazonaws.com/asset-store-bucket/${item.asset.thumbnailUrl}`}
          alt="asset"
          width={68}
          height={85}
          className="mr-[1.6rem] min-w-[6.8rem]"
        />
      </div>
      <div>
        <h4 className="mb-[0.8rem] leading-[2.2rem]">{item.asset.assetName}</h4>
        <div className="flex items-center text-base leading-[2rem]">
          <p className="mr-[0.4rem] text-primary-main">{formatPrice(item.asset.discountPrice)}</p>

          {item.asset.discountPrice !== item.asset.price && (
            <span className="text-ms text-neutral-navy-800 line-through">
              {formatPrice(item.asset.price)}
            </span>
          )}
        </div>
      </div>
    </li>
  )
}
