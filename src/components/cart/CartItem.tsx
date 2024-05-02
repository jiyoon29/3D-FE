import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { formatPrice } from '@/utils/formatPrice'
import CustomCheckbox from '../common/CustomCheckbox'
import { CartItemProps as CartItemPropsInterface } from '@/api/interface/cart'
import { deleteSelectedCartItem } from '@/utils/cartUtils'
import { useUser } from '@/hooks/useUser'
import { cartCount } from '@/api/service/cart'
import { setItemCount } from '@/store/cartSlice'

interface CartItemProps {
  item: CartItemPropsInterface['item']
  onChecked: (cartId: string, isChecked: boolean) => void
  isChecked: boolean
  cartItems: CartItemProps['item'][]
  setCartItems: React.Dispatch<React.SetStateAction<CartItemProps['item'][]>>
  setSelectedCartIds: React.Dispatch<React.SetStateAction<string[]>>
}

export default function CartItem({
  item,
  onChecked,
  isChecked,
  cartItems,
  setCartItems,
  setSelectedCartIds,
}: CartItemProps) {
  const { userId } = useUser()
  const dispatch = useDispatch()

  const increaseCartCount = async () => {
    try {
      const cartCountNum = await cartCount(userId)
      dispatch(setItemCount(cartCountNum))
    } catch (error) {
      console.log('장바구니 카운트 증가 오류:', error)
    }
  }

  const handleCheckboxChange = (isChecked: boolean) => {
    onChecked(`${item.cartId}`, isChecked) // 체크박스 체크/언체크 이벤트 핸들러 호출
  }

  const handleDeleteItem = () => {
    deleteSelectedCartItem(userId, item.cartId, cartItems, setCartItems, setSelectedCartIds)
    increaseCartCount()
  }

  return (
    <tr>
      <td>
        <CustomCheckbox
          id={`i${item.cartId}`}
          onChange={handleCheckboxChange}
          isChecked={isChecked}
        />
      </td>
      <td className="py-[0.8rem]">
        <Image
          src={`https://asset-store-bucket.s3.ap-northeast-2.amazonaws.com/asset-store-bucket/${item.asset.thumbnailUrl}`}
          alt="asset"
          width={80}
          height={100}
          className="min-w-[8rem]"
        />
      </td>
      <td>
        <div className="px-[1.2rem]">
          <h4 className="text-[2rem] font-bold">{item.asset.assetName}</h4>
          <ul className="flex flex-wrap items-center text-sm">
            <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem] after:w-[0.1rem] after:bg-transparent-navy-30">
              확장자 : {item.asset.extension}
            </li>
            <li>데이터 용량 : {item.asset.size}KB</li>
          </ul>
        </div>
      </td>
      <td>
        <div className="px-[2.4rem] text-right text-sl">
          <p>{formatPrice(item.asset.discountPrice)}</p>
          {item.asset.discountPrice !== item.asset.price && (
            <p className="text-mm font-normal text-neutral-navy-800 line-through">
              {formatPrice(item.asset.price)}
            </p>
          )}
        </div>
      </td>
      <td>
        <Image
          src="/icons/heart.svg"
          alt="찜"
          width={24}
          height={24}
          className="mx-auto cursor-pointer"
        />
      </td>
      <td>
        <Image
          src="/icons/trash.svg"
          alt="삭제"
          width={24}
          height={24}
          className="mx-auto cursor-pointer"
          onClick={handleDeleteItem}
        />
      </td>
    </tr>
  )
}
