/**
 * 결제관련(결제하기, 결제내역, 주문내역 등) API
 */
import { OrderResponse, PaymentPayload } from '../interface/payment'
import { axiosInstance } from '../axios'
import { useUser } from '@/hooks/useUser'

// 주문하기
export const postPayment = async (T: PaymentPayload): Promise<OrderResponse> => {
  const res = await axiosInstance.post<OrderResponse>('/s/order', T)
  return res.data
}

export const getOrderComplete = async (userId: number, orderId: string) => {
  const res = await axiosInstance.get(`/s/user/${userId}/orders/${orderId}`)
  return res.data
}
