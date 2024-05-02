/**
 * 로그인, 회원가입 등 인증관련 Interface
 */
import { FieldValues } from 'react-hook-form'
import { ApiResponse } from '.'
export interface LoginRequest {
  email: string
  password: string
  keepLogin?: boolean
}

export interface UserId {
  userId: number
}

export type LoginResponse = ApiResponse<UserId>

export interface RegisterRequest extends LoginRequest {
  firstName: string
  lastName: string
  code: string
  passwordConfirm?: string
}

export interface User {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UserInfo {
  id: number
  firstName: string
  lastName: string
  email: string
  createdAt: Date | string
}

export interface UserResponseData {
  data?: UserInfo
}

//이메일중복체크
export interface EmailCheckRequest {
  email: string
}

// 회원가입 - 인증코드전송
export interface JoinVerifyCodeSend {
  firstName: string
  lastName: string
  email: string
}

//회원가입-인증확인 request
export interface JoinVerifyConfirmRequest {
  userId: number
  email: string
  code: string
}

//회원가입등록
export interface RegisterEnroll {
  firstName: string
  lastName: string
  email: string
  password: string
}

// 회원가입성공시, response
export interface JoinResponseData {
  status: number
  msg: string
  data: boolean
}

// 비밀번호 변경 - 인증코드 전송 request
export interface PasswordSendRequest {
  firstName: string
  lastName: string
  email: string
}

// 비밀번호 변경 - 인증코드 확인 request
export interface PasswordCheckRequest {
  userId: number
  email: string
  code: string
}

// 비밀번호 변경 request
export interface PasswordChangeRequest {
  email: string
  password: string
  code: string
}

// export interface EditProfileRequest {
//   userId: number | undefined
//   userData: {
//     curPassword: string
//     newPassword: string
//   }
// }

// export interface EditProfileHookFormProps extends EditProfileRequest {
//   curPassword: string
//   newPassword: string
//   passwordConfirm: string
// }
