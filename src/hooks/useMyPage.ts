import { MutationFunction, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useRouter } from 'next/navigation'
import {
  getMyPageOrderHistory,
  getMyPageOrderHistoryDetail,
  getOrderHistory,
  getUserInfo,
  withdrawal,
} from '@/api/service/myPage'
import { WithdrawRequest, WithdrawResponse } from '@/api/interface/myPage'
import { AxiosError } from 'axios'
import Swal from 'sweetalert2'
import { removeCookie } from '@/utils/token'
import { data } from 'autoprefixer'
import { endOfDay, startOfDay, subDays } from 'date-fns'
import { useUser } from './useUser'

export const useGetUserInfo = () => {
  const { userId } = useUser()
  const { data: myUser, refetch } = useQuery({
    queryKey: ['myUser', userId],
    queryFn: () => getUserInfo(),
    select: (data) => {
      return data.data
    },
  })

  return { refetch, myUser }
}

export const useWithdrawal = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const withdrawalMutationFn: MutationFunction<WithdrawResponse, WithdrawRequest> = async (
    variables,
  ) => {
    const { id, withdrawalData } = variables
    return await withdrawal(id, withdrawalData)
  }

  const { mutate: deleteWithdrawal } = useMutation<WithdrawResponse, AxiosError, WithdrawRequest>(
    withdrawalMutationFn,
    {
      onSuccess: (data) => {
        Swal.fire({
          title: '회원 탈퇴가 완료되었습니다.',
          color: '#C7D1DB',
          background: '#171A1D',
          confirmButtonColor: '#3399FF ',
          confirmButtonText: '확인',
        })
        removeCookie('accessToken')
        queryClient.clear()
        router.push('/login')
      },
      onError: (error) => {
        Swal.fire({
          title: '회원탈퇴를 실패하였습니다.',
          text: '다시 시도해주세요.',
          icon: 'error',
          color: '#C7D1DB',
          background: '#171A1D',
          confirmButtonColor: '#3399FF ',
          confirmButtonText: '확인',
        })
      },
    },
  )
  return { deleteWithdrawal }
}

export const useGetOrderHistories = () => {
  const { userId } = useUser()
  //오늘 부터 한 달 이전 기준으로 출력
  const today = new Date()
  const startDate = startOfDay(subDays(today, 30))
  const endDate = endOfDay(today)

  const { data: orderHistories } = useQuery({
    queryKey: ['orderHistories', userId, startDate, endDate],
    queryFn: () => getMyPageOrderHistory(userId, startDate, endDate),
    keepPreviousData: true,
  })

  return { orderHistories }
}

export const useOrderHistoryDetail = (oderId: number) => {
  const { userId } = useUser()
  const { data: orderHistoryDetail } = useQuery({
    queryKey: ['orderHistoryDetail', userId, oderId],
    queryFn: () => getMyPageOrderHistoryDetail(userId, oderId),
    keepPreviousData: true,
  })

  return { orderHistoryDetail }
}
