'use client'
import { Dispatch, SetStateAction } from 'react'
import { logout } from '@/api/service/auth'
import { removeCookie, setToken } from '@/utils/token'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { useUser } from '@/hooks/useUser'

export default function Logout({
  setAccessToken,
}: {
  setAccessToken: Dispatch<SetStateAction<boolean>>
}) {
  const { resetUserId } = useUser()
  const { mutate } = useMutation(logout, {
    onSuccess: () => {
      resetUserId()
      console.log(logout, '로그아웃 성공')
      removeCookie('accessToken')
      setAccessToken(false)
      localStorage.removeItem('userId')
    },
  })
  const queryClient = useQueryClient()
  const router = useRouter()

  const handleLogout = () => {
    Swal.fire({
      title: '로그아웃 하시겠습니까?',
      text: '로그아웃을 하시면 다시 로그인을 하셔야 합니다.',
      icon: 'warning',
      showCancelButton: true,
      color: '#C7D1DB',
      background: '#171A1D',
      confirmButtonColor: '#3399FF ',
      cancelButtonColor: '#737C85',
      confirmButtonText: '네, 로그아웃할게요!',
      cancelButtonText: '취소할게요!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '로그아웃 되었습니다.',
          text: `서비스 이용 시 다시 로그인해주세요 :)`,
          icon: 'success',
          color: '#C7D1DB',
          background: '#171A1D',
          confirmButtonColor: '#3399FF ',
          confirmButtonText: '확인',
        })
        mutate()
        setToken
        queryClient.clear()
        router.push('/')
      }
    })
  }

  return (
    <>
      <li
        onClick={handleLogout}
        className="cursor-pointer border-t border-transparent-navy leading-[4.8rem]"
      >
        <p>로그아웃</p>
      </li>
    </>
  )
}
