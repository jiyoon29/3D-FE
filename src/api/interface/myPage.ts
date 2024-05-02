import { FieldValues } from 'react-hook-form'
import { JoinVerifyCodeSend } from './auth'
import { type } from 'os'
import { ApiResponse } from '.'

// 비밀번호 확인
export interface MyPagePasswordCheckRequest {
  userId: number
  password: string
}

// 회원정보 조회
export interface MyPageGetUserResponse extends JoinVerifyCodeSend {
  status: number
  msg: string
  data: {
    id: number
  }
}

//회원정보 수정
export interface MyPagePasswordChangeRequest {
  newPassword: string
}

// 회원탈퇴 시 유저데이터
export interface WithdrawRequest extends FieldValues {
  message: string
  deleteConfirm: boolean
}

// 회원탈퇴 시 유저데이터
// export interface WithdrawRequest extends FieldValues {
//   userId: number | undefined
//   withdrawData: {
//     message: string
//     deleteConfirm: boolean
//   }
//   email?: string
//   password?: string
// }

// 회원 탈퇴
// export interface WithdrawalResponseData {
//   status: number
//   msg: string
// }

export type WithdrawResponse = ApiResponse<WithdrawRequest>
