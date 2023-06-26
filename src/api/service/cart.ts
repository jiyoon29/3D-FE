import { axiosInstance } from '../axios'
import { CartDeleteRequest, CartDeleteResponse } from '../interface/cart'
import { ApiResponse } from '../interface'

export const cartCount = async (user: number) => {
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
