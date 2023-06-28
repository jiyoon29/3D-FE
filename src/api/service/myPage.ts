/**
 * 마이페이지 API - 유저정보조회, 회원탈퇴, 주문내역, 주문상세내역
 */

import { axiosInstance } from '../axios'
import { User, UserId, UserResponseData } from '../interface/auth'
import { WithdrawRequest } from '../interface/myPage'
import { OrderHistoryResponse, OrderHistoryResponseData } from '../interface/payment'

//유저정보조회
// export const getUserInfo = async (id: number): Promise<UserResponseData> => {
export const getUserInfo = async <T = UserResponseData>(id: number): Promise<T> => {
  const res = await axiosInstance.get(`/s/user/`)
  return res.data
}

//회원 탈퇴
// export const withdrawal = async (params: type) => {}
export const withdrawal = async (id: number, withdrawData: WithdrawRequest) => {
  const { message, deleteConfirm } = withdrawData
  const { data } = await axiosInstance.post(`/s/user/${id}/withdraw`, {
    message,
    deleteConfirm,
  })
  return data
}

// 주문내역 - 달력 필터링에도 사용가능할지도
export const getMyPageOrderHistory = async <T = OrderHistoryResponse>(
  id: string | null,
  startDate: Date,
  endDate: Date,
): Promise<T> => {
  // 날짜 포맷함수
  function formatDate(date: Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = formatDate(endDate)

  const res = await axiosInstance.get(
    `/s/user/${id}/orders?startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
  )
  return res.data
}

// 주문상세내역
export const getMyPageOrderHistoryDetail = async (id: string | null, orderId: number) => {
  const { data } = await axiosInstance.get(`/s/user/${id}/orders/${orderId}`)
  return data
}
