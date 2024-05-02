import { UserId } from '@/api/interface/auth'
import { getUser } from '@/api/service/auth'
import { getUserInfo } from '@/api/service/myPage'
import { getToken } from '@/utils/token'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const useUser = () => {
  const queryClient = useQueryClient()

  const userId: number = queryClient.getQueryData(['user', 'id']) as number

  // 로그아웃시 리셋
  const resetUserId = () => {
    queryClient.setQueryData(['user', 'id'], undefined)
  }

  // userId가 없는 경우에만 getUser을 호출하여 userId 가져오기
  const fetchUserId = async () => {
    const accessToken = getToken()
    if (!userId && accessToken) {
      try {
        const data = await getUserInfo()
        queryClient.setQueryData(['user', 'id'], data.data?.id)
      } catch (error) {
        // 에러 처리 로직 추가
      }
    }
  }
  fetchUserId()

  // userId가 존재하는 경우에만 useQuery 사용
  const { data: user } = useQuery(['user'], getUserInfo, {
    enabled: !!userId,
  })

  return { user, userId, fetchUserId, resetUserId }
}
