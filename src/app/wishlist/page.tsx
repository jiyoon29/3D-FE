import Layout from '@/components/common/Layout'
import Button from '@/components/wishList/Button'
import WishlistContainer from '@/components/wishList/WishlistContainer'
import Title from '@/components/common/Title'

export default function WishlistPage() {
  const clickHandler = async () => {
    'use server'
    console.log('clicked!')
  }
  return (
    <Layout>
      <div className="pt-[2.4rem]">
        <div className="px-[2.2rem] py-[4rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <Title tit="위시리스트" mb={0} className="text-neutral-navy-100" />
              <p className="ml-[0.8rem] flex items-center text-sl text-neutral-navy-200">
                <span>&#40;</span>
                <span></span>
                <span>&#41;</span>
              </p>
            </div>
            <div className="buttonContainer flex gap-[8px]">
              <Button clickHandler={clickHandler}>전체 삭제</Button>
              <Button clickHandler={clickHandler}>선택항목 삭제</Button>
              <Button clickHandler={clickHandler}>선택항목 장바구니</Button>
            </div>
          </div>
          <WishlistContainer text={'장바구니'} />
        </div>
      </div>
    </Layout>
  )
}
