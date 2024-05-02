/**
 * 로그인, 회원가입, 비밀번호 변경 페이지에 사용되는 검정컨테이너
 */
import Image from 'next/image'

export default function AuthContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex flex-col items-end justify-center md:h-screen lg:py-0">
      <div className="mr-[3%] h-auto w-[26%] justify-center rounded-sm bg-black bg-opacity-80 p-8 text-neutral-navy-100">
        <a href="#">
          <Image src="/logo-title.svg" alt="logo" width={155} height={54} />
        </a>
        {children}
      </div>
    </div>
  )
}
