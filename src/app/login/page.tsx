import AuthContainer from '@/components/common/AuthContainer'
import Login from '@/components/login/Login'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <section className="h-screen bg-[url('/background/login-bg.svg')] bg-cover bg-center">

    <AuthContainer>
      <div className="mt-[46%]">
        <div className="flex flex-col">
          <span className="text-[2.3rem] font-bold ">로그인</span>
          <span className="text-xs">가입하신 이메일 또는 간편 로그인</span>
        </div>
        <div className="my-5 border-t-2 border-blue-500"></div>
        <Login />
        <div className="mt-6 flex items-center justify-between">
          <a
            href="/signup"
            className="text-primary-600 dark:text-primary-500 text-xs  hover:underline"
          >
            회원가입
          </a>
          <a
            href="/login/change"
            className="ext-primary-600 dark:text-primary-500 text-xs  hover:underline"
          >
            비밀번호 재설정하기
          </a>
        </div>
      </div>
    </AuthContainer>
    </section>
  )
}
