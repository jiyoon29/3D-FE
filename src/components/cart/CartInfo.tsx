import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Title from '../common/Title'
import { formatPrice } from '@/utils/formatPrice'
import { CartItemProps } from '@/api/interface/cart'

interface CartInfoProps {
  selectedCount: number
  selectedTotalPrice: number
  selectedDiscountAmount: number
  cartItems: CartItemProps['item'][]
  selectedCartIds: string[]
}

export default function CartInfo({
  selectedCount,
  selectedTotalPrice,
  selectedDiscountAmount,
  cartItems,
  selectedCartIds,
}: CartInfoProps) {
  const router = useRouter()
  const totalPrice = selectedTotalPrice - selectedDiscountAmount

  const navigateToNextPage = () => {
    const selectedItems = cartItems.filter((item) =>
      selectedCartIds.includes(item.cartId.toString()),
    )
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems))
    if (selectedItems.length > 0) {
      router.push('/payment')
    }
  }

  return (
    <div className="sticky top-[9.6rem] mr-[2.4rem] flex h-[calc(100vh-9.6rem)] w-[23.9%] min-w-[26rem] flex-col justify-between border-l border-transparent-navy-30 px-[1.432%] py-[1.671%]">
      <div>
        <Title tit="결제정보" mb={2.4} />
        <ul className="text-ms">
          <li className="flex w-full justify-between border-b border-dashed border-transparent-navy-30 px-[0.4rem] leading-[5.6rem]">
            <p>구매할 에셋 : {selectedCount}개</p>
            <p>{formatPrice(selectedTotalPrice)}</p>
          </li>
          <li className="border-b border-dashed border-transparent-navy-30 text-neutral-navy-300">
            <div className="flex w-full justify-between px-[0.4rem] leading-[4.4rem]">
              <p>쿠폰 할인 금액</p>
              <p>-</p>
            </div>
            <div className="mb-[1.6rem] flex h-[4.8rem] w-full items-center justify-between rounded-sm border border-transparent-navy-30 px-[1.2rem]">
              <div className="flex items-center text-sm">
                <Image
                  src="/icons/coupon-dis.svg"
                  alt="쿠폰"
                  width={24}
                  height={24}
                  className="invert-48 sepia-19 saturate-210 hue-rotate-169 brightness-96 contrast-90 filter"
                />
                <p className="ml-[0.8rem]">할인쿠폰 찾아보기</p>
              </div>
              <Image
                src="/icons/chevronRight-dis.svg"
                alt="화살표"
                width={20}
                height={20}
                className="invert-48 sepia-19 saturate-210 hue-rotate-169 brightness-96 contrast-90 filter"
              />
            </div>
          </li>
          <li className="flex w-full justify-between border-b border-transparent-navy-30 px-[0.4rem] leading-[5.6rem]">
            <p>자체 할인 금액</p>
            <p>{formatPrice(-selectedDiscountAmount)}</p>
          </li>
          <li className="flex w-full justify-between border-b border-transparent-navy-30 px-[0.4rem] leading-[5.6rem]">
            <p>총 추가 혜택</p>
            <p>{formatPrice(0)}</p>
          </li>
        </ul>
      </div>
      <div>
        <div className="mb-[1.2rem] flex w-full justify-between text-sl leading-[5.4rem]">
          <p>결제 예정 금액</p>
          <p>{formatPrice(totalPrice)}</p>
        </div>
        <button
          className="h-[4.4rem] w-full rounded-sm bg-primary-main font-semibold text-neutral-white-50"
          onClick={navigateToNextPage}
        >
          결제하기
        </button>
      </div>
    </div>
  )
}
