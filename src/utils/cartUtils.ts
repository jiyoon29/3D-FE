import { SetStateAction, Dispatch } from 'react'
import { CartItemProps } from '@/api/interface/cart'
import { cartDelete } from '@/api/service/cart'

export async function deleteAllCartItems(
  cartItems: CartItemProps['item'][],
  setCartItems: Dispatch<SetStateAction<CartItemProps['item'][]>>,
  setSelectedCartIds: Dispatch<SetStateAction<string[]>>,
): Promise<void> {
  try {
    // 모든 장바구니 아이템 삭제
    await cartDelete({ userId: 1, carts: cartItems.map((item) => item.cartId) })
    setCartItems([])
    setSelectedCartIds([])
  } catch (error) {
    console.log('모든 장바구니 아이템 삭제 중 오류 발생:', error)
  }
}

export async function deleteSelectedCartItems(
  selectedCartIds: string[],
  cartItems: CartItemProps['item'][],
  setCartItems: Dispatch<SetStateAction<CartItemProps['item'][]>>,
  setSelectedCartIds: Dispatch<SetStateAction<string[]>>,
): Promise<void> {
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

export async function deleteSelectedCartItem(
  cartId: number,
  cartItems: CartItemProps['item'][],
  setCartItems: Dispatch<SetStateAction<CartItemProps['item'][]>>,
  setSelectedCartIds: Dispatch<SetStateAction<string[]>>,
): Promise<void> {
  try {
    // 카트 아이템 삭제
    await cartDelete({ userId: 1, carts: [cartId] })

    // 카트 아이템 목록에서 삭제된 아이템을 제외하고 업데이트
    const updatedCartItems = cartItems.filter((item) => item.cartId !== cartId)
    setCartItems(updatedCartItems)

    // 선택된 카트 아이디 목록 업데이트
    setSelectedCartIds((prevIds) => prevIds.filter((id) => id !== String(cartId)))
  } catch (error) {
    console.log('장바구니 아이템 삭제 중 오류 발생:', error)
  }
}
