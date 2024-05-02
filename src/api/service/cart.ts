import { axiosInstance } from '../axios'
import {
  CartAddRequest,
  CartAddResponse,
  CartDeleteRequest,
  CartDeleteResponse,
} from '../interface/cart'

export const cartCount = async (user: number): Promise<number> => {
  try {
    const res = await axiosInstance.get(`/s/user/${user}/cartCount`)
    if (res && res.data) {
      return res.data.data.cartCount
    }
    return 0
  } catch (error) {
    console.log(error)
    return 0
  }
}

export const cartList = async (user: number) => {
  const res = await axiosInstance.get(`/s/user/${user}/cart`)
  return res.data
}

export const cartDelete = async (T: CartDeleteRequest): Promise<CartDeleteResponse> => {
  const res = await axiosInstance.post<CartDeleteResponse>('/s/cart/delete', T)
  return res.data
}

export const cartAdd = async (request: CartAddRequest): Promise<CartAddResponse> => {
  try {
    const res = await axiosInstance.post<CartAddResponse>('/s/cart/add', request)
    return res.data
  } catch (error) {
    // 오류 처리 로직
    console.log('장바구니 아이템 추가 중 오류 발생:', error)
    throw error
  }
}
