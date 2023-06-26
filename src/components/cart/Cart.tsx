'use client'

import React, { useEffect, useState } from 'react'
import CartHeader from '@/components/cart/CartHeader'
import CartTable from '@/components/cart/CartTable'
import { cartList } from '@/api/service/cart'
import { CartItemProps } from '@/api/interface/cart'

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItemProps['item'][]>([])
  // const [selectedCount, setSelectedCount] = useState(0)
  const [selectedCartIds, setSelectedCartIds] = useState<string[]>([])

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // const userId = useSelector((state: RootState) => state.user.userId)
        // 확인 필요 useSelector
        const response = await cartList(1)
        setCartItems(response.data)
        console.log(response.data)
      } catch (error) {
        console.log('Error fetching cart items:', error)
      }
    }
    fetchCartItems()
  }, [])

  // 체크박스 체크/언체크 이벤트 핸들러
  const handleCheckboxChange = (cartId: string, isChecked: boolean) => {
    if (isChecked) {
      // 선택된 카트 ID 목록에 추가
      setSelectedCartIds((prevIds) => [...prevIds, cartId])
    } else {
      // 선택된 카트 ID 목록에서 제거
      setSelectedCartIds((prevIds) => prevIds.filter((id) => id !== cartId))
    }
  }

  const selectedCount = selectedCartIds.length

  return (
    <div className="w-[74.82%] px-[2.2rem] py-[4rem]">
      <CartHeader itemCount={cartItems.length} selectedCount={selectedCount} />
      <CartTable
        cartItems={cartItems}
        setCartItems={setCartItems}
        onChecked={handleCheckboxChange}
        selectedCartIds={selectedCartIds}
        setSelectedCartIds={setSelectedCartIds}
      />
    </div>
  )
}
