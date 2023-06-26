/**
 * 마이페이지 API - 유저정보조회, 회원탈퇴, 주문내역, 주문상세내역
 */

import { axiosInstance } from '../axios'
import { User, UserId, UserResponseData } from '../interface/auth'
import { WithdrawRequest } from '../interface/myPage'
import { OrderHistoryResponse, OrderHistoryResponseData } from '../interface/payment'

//유저정보조회
export const getUserInfo = async <T = UserResponseData>(id: number): Promise<T> => {
  const res = await axiosInstance.get(`/s/user/`)
  return res.data
}

//회원 탈퇴
// export const withdrawal = async ({ id, withdrawData }: WithdrawRequest) => {
//   const { message, deleteConfirm } = withdrawData
//   const { data } = await axiosInstance.post(`/s/user/${id}/withdraw`, {
//     message,
//     deleteConfirm,
//   })
//   return data
// }

export const getOrderHistory = async <T = OrderHistoryResponse>(page: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets?page=${page}`)
  return res.data
}

// 주문내역 - 달력 필터링에도 사용가능할지도
export const getMyPageOrderHistory = async <T = OrderHistoryResponse>(
  id: number,
  startDate: Date,
  endDate: Date,
): Promise<T> => {
  const { data } = await axiosInstance.get(`/s/user/${id}/orders
  ?startDate=${startDate}&endDate=${endDate}`)
  return data
}

// 주문상세내역
export const myPageGetOrderHistoryDetail = async (id: number, orderId: number) => {
  const { data } = await axiosInstance.get(`/s/user/${id}/orders/${orderId}`)
  return data
}
