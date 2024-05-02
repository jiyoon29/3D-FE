import { LoginRequest, LoginResponse } from '@/api/interface/auth'
import { login } from '@/api/service/auth'
import { RootState } from '@/store/store'
import { setUser } from '@/store/userSlice'
import { setToken } from '@/utils/token'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'

export const useLogin = () => {
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const loginMutation = useMutation<LoginResponse, AxiosError, LoginRequest>(login, {
    onSuccess: (data) => {
      queryClient.setQueryData(['LoginData'], data.data)
      dispatch(setUser(data.data.userId))
      localStorage.setItem('userId', data.data.userId.toString())
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return {
    mutate: loginMutation.mutate,
  }
}
