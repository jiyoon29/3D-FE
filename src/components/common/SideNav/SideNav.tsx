import Image from 'next/image'
import Link from 'next/link'
import CategoryList from './CategoryList'
import CategoryAsset from './CategoryAsset'
import { getAllCategories } from '@/api/service/category'

export default async function SideNav() {
  const data = await getAllCategories()

  return (
    <aside
      className="no-scrollbar fixed z-10 flex h-screen w-[24.4rem] min-w-[24.4rem] flex-col overflow-y-auto 
    border-r border-solid border-transparent-navy-30 bg-bg-1 pb-16 pt-[2.4rem] text-mm"
    >
      <div className="pl-[1.6rem]">
        <Link href="/">
          <Image src="/logo-title.svg" alt="로고" width={156} height={36} />
        </Link>
      </div>
      <div className="flex cursor-pointer justify-end px-8 py-[0.4rem]">
        <Image src="/icons/minimizeMenu.svg" alt="메뉴" width={24} height={24} />
      </div>
      <CategoryAsset />
      <CategoryList categories={data} />
      <div className="mx-auto w-[20rem] bg-neutral-navy-900 leading-[3.8rem]">
        <Link href="/" className="flex justify-center text-neutral-navy-200">
          Neuroid&nbsp;<span className="text-primary-main">Beta</span>
          <Image
            src="/icons/arrowRight.svg"
            alt="화살표"
            width={18}
            height={18}
            className="ml-[0.4rem]"
          />
        </Link>
      </div>
    </aside>
  )
}
