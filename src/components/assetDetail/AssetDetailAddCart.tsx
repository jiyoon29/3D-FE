'use client'

import { useState } from 'react'
import { AssetDetail } from '@/api/interface/asset'
import WishlistButton from '../common/WishlistButton'
import { formatPrice } from '@/utils/formatPrice'
import { cartCount } from '@/api/service/cart'
import { CartAddRequest } from '@/api/interface/cart'
import { cartAdd } from '@/api/service/cart'
import { useDispatch, useSelector } from 'react-redux'
import { setItemCount } from '@/store/cartSlice'
import { RootState } from '@/store/store'
import { useUser } from '@/hooks/useUser'
import Toast from '../common/Toast'

interface Props {
  asset: AssetDetail
}

export default function AssetDetailAddCart({ asset }: Props) {
  const dispatch = useDispatch()
  const { userId } = useUser()

  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleAddToCart = async () => {
    try {
      if (userId === undefined) return
      const assetId = asset.assetId // 에셋 아이디 가져오기

      if (!userId) {
        // 유저 아이디가 없는 경우 처리
        console.log('유저 아이디가 없습니다.')
        return
      }

      const request: CartAddRequest = {
        userId: userId,
        assets: [assetId],
      }

      const response = await cartAdd(request) // 장바구니에 담기 API 호출
      const cartCountNum = await cartCount(userId)

      // API 호출 결과에 따른 로직 처리
      console.log('장바구니에 담기 성공:', response)
      dispatch(setItemCount(cartCountNum))
      setToastMessage('장바구니에 담겼습니다.')
      setShowToast(true)
    } catch (error: any) {
      // 오류 처리 로직
      if (error.response && error.response.data && typeof error.response.data === 'object') {
        const errorMessage = error.response.data.data
        setToastMessage(errorMessage)
        setShowToast(true)
      } else {
        console.log('장바구니에 담기 중 오류 발생:', error)
      }
    }
  }

  return (
    <>
      <div className="absolute bottom-0 h-[10.5rem] w-[70.9rem] border-t border-transparent-navy-30 bg-bg-2">
        <div className="p-[2.7rem]">
          <div className="flex w-[65.7rem] justify-between">
            <div className="flex w-[33rem] flex-col gap-y-[1rem]">
              <h3 className="text-base leading-[1.936rem] text-neutral-navy-100">
                {asset.assetName}
              </h3>
              <div className="text-[1.8rem] text-neutral-white-0">{formatPrice(asset.price)}</div>
            </div>
            <div className="flex">
              <button
                className="mr-3 flex h-[4rem] w-[26.311rem] items-center justify-center
          rounded-[0.4rem] bg-primary-main px-20 py-3
          font-semibold leading-[1.936rem] text-neutral-white-0
          hover:bg-primary-darkblue-hover"
                onClick={handleAddToCart}
              >
                장바구니에 담기
              </button>
              <WishlistButton />
            </div>
          </div>
        </div>
      </div>
      {showToast && <Toast message={toastMessage} />}
    </>
  )
}
