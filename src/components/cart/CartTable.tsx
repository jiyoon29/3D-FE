import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import CustomCheckbox from '../common/CustomCheckbox'
import { cartList } from '@/api/service/cart'
import { CartItemProps } from '@/api/interface/cart'

interface CartTableProps {
  cartItems: CartItemProps['item'][]
  setCartItems: React.Dispatch<React.SetStateAction<CartItemProps['item'][]>>
  onChecked: (cartId: string, isChecked: boolean) => void
  selectedCartIds: string[]
  setSelectedCartIds: React.Dispatch<React.SetStateAction<string[]>>
}

export default function CartTable({
  cartItems,
  setCartItems,
  onChecked,
  selectedCartIds,
  setSelectedCartIds,
}: CartTableProps) {
  const [isAllChecked, setIsAllChecked] = useState(false)
  const allCheckboxId = 'all-checkbox'

  // 모든 아이템이 선택되었는지 확인하는 함수
  useEffect(() => {
    const isEveryItemChecked = cartItems.every((item) =>
      selectedCartIds.includes(String(item.cartId)),
    )
    setIsAllChecked(isEveryItemChecked)
  }, [cartItems, selectedCartIds])

  // 전체 선택 체크박스 변경 이벤트 처리 함수
  const handleAllCheckboxChange = (isChecked: boolean) => {
    setIsAllChecked(isChecked)
    if (isChecked) {
      // 전체 선택 시 모든 카트 아이템의 ID를 선택 아이디 목록에 추가
      const allCartIds = cartItems.map((item) => String(item.cartId))
      setSelectedCartIds(allCartIds)
    } else {
      // 전체 선택 해제 시 선택 아이디 목록 초기화
      setSelectedCartIds([])
    }
  }

  // 개별 체크박스 변경 이벤트 처리 함수
  const handleCheckboxChange = (cartId: string, isChecked: boolean) => {
    onChecked(cartId, isChecked)
    const updatedSelectedCartIds = isChecked
      ? [...selectedCartIds, cartId]
      : selectedCartIds.filter((id) => id !== cartId)
    setIsAllChecked(updatedSelectedCartIds.length === cartItems.length)
    setSelectedCartIds(updatedSelectedCartIds)
  }

  return (
    <table className="mt-[3.2rem]">
      <thead>
        <tr className="w-[100%] text-neutral-200">
          <th className="w-[7.5%] text-center text-sm">
            <CustomCheckbox
              id={allCheckboxId}
              onChange={handleAllCheckboxChange}
              isChecked={isAllChecked}
            />
          </th>
          <th className="w-[6.6%] text-sm">
            <p>대표이미지</p>
          </th>
          <th className="w-[48.6%] text-sm">
            <p>이름 및 상세설명</p>
          </th>
          <th className="w-[20.7%] pr-[2.4rem] text-right text-sm">
            <p>가격</p>
          </th>
          <th className="w-[8.3%] text-sm">
            <p>찜</p>
          </th>
          <th className="w-[8.3%] text-sm">
            <p>삭제</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <CartItem
            key={item.cartId}
            item={item}
            onChecked={onChecked}
            isChecked={selectedCartIds.includes(String(item.cartId))}
            cartItems={cartItems}
            setCartItems={setCartItems}
            setSelectedCartIds={setSelectedCartIds}
          />
        ))}
      </tbody>
    </table>
  )
}
