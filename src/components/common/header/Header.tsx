'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import Logout from '../../logout/Logout'
import { getToken, setToken } from '@/utils/token'
import { cartCount } from '@/api/service/cart'
import { useDispatch, useSelector } from 'react-redux'
import { setItemCount } from '@/store/cartSlice'
import { RootState } from '@/store/store'
import OrderHistoryButton from './OrderHistoryButton'
import { useUser } from '@/hooks/useUser'

export default function Header() {
  const [accessToken, setAccessToken] = useState(false)
  const { userId } = useUser()
  const dispatch = useDispatch()
  const cartItemCount = useSelector((state: RootState) => state.cart.itemCount)

  useEffect(() => {
    const cookieToken = getToken()
    if (cookieToken) {
      setAccessToken(true)
    }
  }, [userId])

  const { refetch } = useQuery(['cartCount', userId], () => cartCount(userId), {
    enabled: !!userId,
    onSuccess: (data) => {
      dispatch(setItemCount(data))
    },
  })

  useEffect(() => {
    if (userId && accessToken) {
      refetch()
    }
  }, [userId, accessToken, refetch])

  return (
    <header className="fixed z-10 flex h-[7.2rem] w-[calc(100%-24.4rem)] items-center justify-between border-b border-solid border-transparent-navy-30 bg-bg-1 px-[2.3rem] py-[1.1rem]">
      <div className="flex h-[5rem] w-[66.3%] rounded-[0.4rem] border border-transparent-navy-30 bg-bg-2 px-[1.2rem]">
        <Image src="/icons/search.svg" alt="검색" width={24} height={24} />
        <input type="text" className="ml-[0.8rem] w-full bg-bg-2 text-neutral-white-50" />
      </div>
      {accessToken ? (
        <ul className="flex items-center before:m-[1rem] before:h-[3.4rem] before:w-[0.2rem] before:bg-transparent-navy-30">
          <li>
            <Link href="/wishlist" className="block p-[0.9rem]">
              <Image src="/icons/heart.svg" alt="위시리스트로" width={22} height={22} />
            </Link>
          </li>
          <li className="relative">
            <Link href="/cart" className="block p-[0.9rem]">
              <Image src="/icons/cartPlus.svg" alt="장바구니로" width={22} height={22} />
            </Link>
            <p className="absolute right-[0.1rem] top-[0.3rem] h-[1.5rem] w-[1.5rem] rounded-full bg-neutral-white-50 text-center text-[1rem] font-semibold text-neutral-navy-950">
              {cartItemCount}
            </p>
          </li>
          <li>
            <Link href="/my-assets" className="block p-[0.9rem]">
              <Image src="/icons/hardDrive.svg" alt="내에셋으로" width={22} height={22} />
            </Link>
          </li>
          <li className="group relative">
            <div className="cursor-pointer p-[0.9rem]">
              <Image src="/icons/user.svg" alt="마이페이지" width={22} height={22} />
            </div>
            <div className="absolute right-0 top-[100%] hidden text-center text-sl group-hover:block">
              <ul className="w-[13.1rem] rounded-[0.4rem] bg-bg-1 p-4 text-neutral-navy-100">
                <li className="leading-[4.4rem]">
                  <Link href="/my-page" className="text-neutral-navy-100">
                    마이페이지
                  </Link>
                </li>
                {/* <li className="leading-[4.4rem]">
                  <OrderHistoryButton
                    setSelectedTab={function (prev: boolean): void {
                      throw new Error('Function not implemented.')
                    }}
                    selectedTab={false}
                  />
                </li> */}
                <Logout setAccessToken={setAccessToken} />
              </ul>
            </div>
          </li>
        </ul>
      ) : (
        <div className="w-[18.4rem] rounded-full bg-primary-main text-center text-base leading-[4rem] text-neutral-white-50">
          <Link href="/login" className="block">
            로그인
          </Link>
        </div>
      )}
    </header>
  )
}
