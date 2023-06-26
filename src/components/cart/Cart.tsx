'use client'

import React, { useEffect, useState } from 'react'
import CartHeader from '@/components/cart/CartHeader'
import CartTable from '@/components/cart/CartTable'
import CartInfo from '@/components/cart/CartInfo'
import { cartDelete, cartList } from '@/api/service/cart'
import { CartItemProps } from '@/api/interface/cart'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { deleteAllCartItems, deleteSelectedCartItems } from '@/utils/cartUtils'

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItemProps['item'][]>([])
  const [selectedCartIds, setSelectedCartIds] = useState<string[]>([])
  const [selectedTotalPrice, setSelectedTotalPrice] = useState<number>(0)
  const [selectedDiscountAmount, setSelectedDiscountAmount] = useState<number>(0)

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
    } else {
      // 선택된 카트 ID 목록에서 제거
      setSelectedCartIds((prevIds) => prevIds.filter((id) => id !== cartId))
    }
  }

  // 모든 장바구니 아이템 삭제
  const handleDeleteAll = () => deleteAllCartItems(cartItems, setCartItems, setSelectedCartIds)

  // 선택된 장바구니 아이템 삭제
  const handleDeleteSelected = () =>
    deleteSelectedCartItems(selectedCartIds, cartItems, setCartItems, setSelectedCartIds)

  const selectedCount = selectedCartIds.length

  useEffect(() => {
    // 체크된 결제 금액 및 할인 금액 계산
    const calculateSelectedTotalPrice = () => {
      let totalPrice = 0
      let discountAmount = 0

      selectedCartIds.forEach((cartId) => {
        const selectedItem = cartItems.find((item) => item.cartId === Number(cartId))
        if (selectedItem) {
          totalPrice += selectedItem.asset.price
          discountAmount += selectedItem.asset.price - selectedItem.asset.discountPrice
        }
      })

      setSelectedTotalPrice(totalPrice)
      setSelectedDiscountAmount(discountAmount)
    }

    calculateSelectedTotalPrice()
  }, [selectedCartIds, cartItems])

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
      <CartInfo
        selectedCount={selectedCount}
        selectedTotalPrice={selectedTotalPrice}
        selectedDiscountAmount={selectedDiscountAmount}
        cartItems={cartItems}
        selectedCartIds={selectedCartIds}
      />
    </>
  )
}
