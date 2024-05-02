import AuthContainer from '@/components/common/AuthContainer'
import Change from '@/components/login/change/Change'

export default function ChangePage() {
  return (
    <section className="h-screen bg-[url('/background/login-bg.svg')] bg-cover bg-center">
      <AuthContainer>
        <div className="mb-5 mt-[30%] flex flex-col">
          <span className="text-[2.3rem] font-bold ">비밀번호 재설정</span>
          <span className="text-xs">가입하신 메일 주소를 인증해 새로운 비밀번호를 등록하세요</span>
        </div>
        <div className="my-5 border-t-2 border-blue-500"></div>
        <Change />
      </AuthContainer>
    </section>
  )
}
