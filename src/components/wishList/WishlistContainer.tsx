import React from 'react'
import TableHeader from './TableHeader'
import TableItem from './TableItem'
import { Asset } from '@/api/interface/asset'
import { CartIcon } from '../common/icon/Icon'
const assets = [
  {
    cartId: 1,
    asset: {
      assetId: 1,
      assetName: '뛰는 사람',
      price: 10000,
      discount: 0,
      discountPrice: 10000,
      extension: '확장자입니다.',
      size: 10.7,
    },
    orderId: 1, //주문 했음
    wishListId: 1, //위시리스트에 있음
  },
  {
    cartId: 2,
    asset: {
      assetId: 2,
      assetName: '걷는 사람',
      price: 10000,
      discount: 0,
      discountPrice: 10000,
      extension: '확장자입니다.',
      size: 10.7,
    },
    orderId: 2,
    wishListId: null,
  },
]

interface WishlistContainerProps {
  text: string
}

export default function WishlistContainer({ text }: WishlistContainerProps) {
  return (
    <table className="mt-[3.2rem] w-[100%] min-w-[91.9rem] max-w-[163rem] text-neutral-navy-100">
      <TableHeader text={text} />
      <tbody>
        {assets.map((item) => (
          <TableItem
            key={item.asset.assetId}
            assetId={item.asset.assetId}
            image={''}
            assetName={item.asset.assetName}
            extension={item.asset.extension}
            size={item.asset.size}
            price={item.asset.price}
            icon={<CartIcon />}
          />
        ))}
      </tbody>
    </table>
  )
}
