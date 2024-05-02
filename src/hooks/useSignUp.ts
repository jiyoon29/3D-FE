import {
  EmailCheckRequest,
  JoinResponseData,
  JoinVerifyCodeSend,
  RegisterEnroll,
} from '@/api/interface/auth'
import { emailDuplicateCheck, joinVerifyCodeSend, join } from '@/api/service/auth'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

// 회원가입 hook
export const useSignUp = () => {
  const router = useRouter()

  // email 중복확인
  const { mutate: emailDuplicateCheckMutation } = useMutation<
    AxiosResponse<EmailCheckRequest> | undefined,
    AxiosError,
    string
  >(emailDuplicateCheck, {
    onSuccess: (data) => {
      if (data?.data) {
        Swal.fire({
          title: '사용가능한 이메일입니다.',
          text: '입력하신 이메일수신함 인증코드를 확인하세요',
          icon: 'success',
          color: '#C7D1DB',
          background: '#171A1D',
          confirmButtonColor: '#3399FF ',
          confirmButtonText: '확인',
        })
      } else {
        Swal.fire({
          title: '사용불가능한 이메일입니다.',
          text: '다른 이메일을 입력해주세요.',
          icon: 'error',
          color: '#C7D1DB',
          background: '#171A1D',
          confirmButtonColor: '#3399FF ',
          confirmButtonText: '확인',
        })
      }
    },
  })

  //회원가입 - 인증코드 전송
  const { mutate: joinVerifyCodeSendMutation } = useMutation<
    AxiosResponse<JoinVerifyCodeSend> | undefined,
    AxiosError,
    string
  >(joinVerifyCodeSend, {
    onSuccess: (data) => {
      if (data?.data) {
        Swal.fire({
          title: '인증 되었습니다.',
          text: '회원가입을 진행해주세요.',
          icon: 'success',
          color: '#C7D1DB',
          background: '#171A1D',
          confirmButtonColor: '#3399FF ',
          confirmButtonText: '확인',
        })
      } else {
        Swal.fire({
          title: '인증에 실패했습니다.',
          text: '정확한 인증코드를 입력해주세요',
          icon: 'error',
          color: '#C7D1DB',
          background: '#171A1D',
          confirmButtonColor: '#3399FF ',
          confirmButtonText: '확인',
        })
      }
    },
  })

  //회원가입
  const { mutate: joinMutation } = useMutation<JoinResponseData, AxiosError, RegisterEnroll>(join, {
    onSuccess: (data) => {
      Swal.fire({
        title: '회원가입이 완료되었습니다.',
        text: '로그인을 진행해주세요.',
        icon: 'success',
        color: '#C7D1DB',
        background: '#171A1D',
        confirmButtonColor: '#3399FF ',
        confirmButtonText: '확인',
      })
      router.push('/login')
    },
    onError: (error) => {
      Swal.fire({
        title: '회원가입에 실패하였습니다.',
        text: '다시 시도해주세요.',
        icon: 'error',
        color: '#C7D1DB',
        background: '#171A1D',
        confirmButtonColor: '#3399FF',
        confirmButtonText: '확인',
      })
    },
  })

  return { joinMutation, emailDuplicateCheckMutation, joinVerifyCodeSendMutation }
}
