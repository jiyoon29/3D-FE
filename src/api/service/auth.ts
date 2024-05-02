/**
 * 로그인, 회원가입 등 인증관련 API
 */

import { setToken } from '@/utils/token'
import { axiosInstance } from '../axios'
import {
  EmailCheckRequest,
  JoinVerifyCodeSend,
  JoinVerifyConfirmRequest,
  LoginRequest,
  LoginResponse,
  PasswordChangeRequest,
  PasswordCheckRequest,
  PasswordSendRequest,
  RegisterEnroll,
  UserResponseData,
} from '../interface/auth'

//로그인
export const login = async <T = LoginResponse>(account: LoginRequest): Promise<T> => {
  const res = await axiosInstance.post<T>('/login', account)
  if ((res.status = 200)) {
    setToken(res.headers.authorization)
  }
  return res.data
}

export const getUser = async (user: number) => {
  if (!user) return null
  const res = await axiosInstance.get(`/s/user/${user}`)
  return res
}

//회원정보 수정
export const editUser = async (id: number) => {
  if (!id) return null
  const res = await axiosInstance.get(`/s/user/${id}`)
  return res
}

// 로그아웃
export const logout = async () => {
  const { data } = await axiosInstance.post('/logout')
  return data
}

// 비밀번호 변경 - 인증코드 전송
export const passwordSend = async (user: PasswordSendRequest) => {
  try {
    const { data } = await axiosInstance.post('/login/send', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

// 비밀번호 변경 - 인증코드 확인
export const passwordCheck = async (user: PasswordCheckRequest) => {
  try {
    const { data } = await axiosInstance.post('/login/check', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

// 비밀번호 변경
export const passwordChange = async (user: PasswordChangeRequest) => {
  try {
    const { data } = await axiosInstance.post('/login/change', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

//회원가입
export const join = async (user: RegisterEnroll) => {
  try {
    const { data } = await axiosInstance.post('/signup', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

//이메일 중복 체크
export const emailDuplicateCheck = async (email: string) => {
  try {
    const data = await axiosInstance.post<EmailCheckRequest>('/signup/duplicate', {
      email,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

//회원가입 - 입력한 이메일로 인증코드 전송
export const joinVerifyCodeSend = async (email: string) => {
  try {
    const data = await axiosInstance.post<JoinVerifyCodeSend>('/signup/send', {
      email,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

//회원가입 - 인증코드 확인
export const joinVerifyConfirm = async (verifyCode: string) => {
  try {
    const data = await axiosInstance.post<JoinVerifyConfirmRequest>('/signup/check', {
      verifyCode,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
