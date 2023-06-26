'use client'

import React, { useEffect, useState } from 'react'
import CartHeader from '@/components/cart/CartHeader'
import CartTable from '@/components/cart/CartTable'
import CartInfo from '@/components/cart/CartInfo'
import { cartDelete, cartList } from '@/api/service/cart'
import { CartItemProps } from '@/api/interface/cart'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

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
        console.log('a', response.data)
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
      console.log(selectedCartIds)
    } else {
      // 선택된 카트 ID 목록에서 제거
      setSelectedCartIds((prevIds) => prevIds.filter((id) => id !== cartId))
    }
  }

  // 모든 장바구니 아이템 삭제
  const handleDeleteAll = async () => {
    try {
      // 모든 장바구니 아이템 삭제
      await cartDelete({ userId: 1, carts: cartItems.map((item) => item.cartId) })
      setCartItems([])
      setSelectedCartIds([])
    } catch (error) {
      console.log('모든 장바구니 아이템 삭제 중 오류 발생:', error)
    }
  }

  // 선택된 장바구니 아이템 삭제
  const handleDeleteSelected = async () => {
    try {
      // 선택된 장바구니 아이템 삭제
      await cartDelete({ userId: 1, carts: selectedCartIds.map(Number) })
      const updatedCartItems = cartItems.filter(
        (item) => !selectedCartIds.includes(item.cartId.toString()),
      )
      setCartItems(updatedCartItems)
      setSelectedCartIds([])
    } catch (error) {
      console.log('선택된 장바구니 아이템 삭제 중 오류 발생:', error)
    }
  }

  const selectedCount = selectedCartIds.length

  return (
    <>
      <div className="w-[74.82%] px-[2.2rem] py-[4rem]">
        <CartHeader
          itemCount={cartItems.length}
          selectedCount={selectedCount}
          onDeleteAll={handleDeleteAll}
          onDeleteSelected={handleDeleteSelected}
        />
        <CartTable
          cartItems={cartItems}
          setCartItems={setCartItems}
          onChecked={handleCheckboxChange}
          selectedCartIds={selectedCartIds}
          setSelectedCartIds={setSelectedCartIds}
        />
      </div>
      <CartInfo selectedCount={selectedCount} />
    </>
  )
}
