import AuthContainer from '@/components/common/AuthContainer'
import SignUp from '@/components/signup/SignUp'

export default function SignUpPage() {
  return (
    <section className="h-screen bg-[url('/background/signup-bg.svg')] bg-cover bg-center">
      <AuthContainer>
        <div className="mt-[26%] flex flex-col">
          <span className="md:text-3xl dark:text-text-neutral-navy-100 text-[2.3rem] font-bold text-neutral-navy-100">
            회원가입
          </span>
          <span className="text-xs font-bold text-neutral-navy-100 dark:text-neutral-navy-100 md:text-xs">
            이메일 주소 또는 간편 가입으로 시작해보세요
          </span>
          <div className="mt-5 border-t-2 border-neutral-navy-900"></div>
        </div>
        <SignUp />
        <div className="mt-[4%] flex justify-end">
          <a href="/login" className="text-xs text-neutral-navy-100 hover:underline">
            로그인 하러가기
          </a>
        </div>
      </AuthContainer>
    </section>
  )
}
