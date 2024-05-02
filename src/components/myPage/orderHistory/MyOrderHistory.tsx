/**
 * 마이페이지-주문내역
 */
'use client'
import { SetStateAction, useEffect, useState } from 'react'
import MyOrderCalendar from './calendar/MyOrderCalendar'
import MyOrderHistoryList from './MyOrderHistoryList'
import PaginationButton from '@/components/common/PaginationButton'
import { useGetOrderHistories } from '@/hooks/useMyPage'
import { OrderHistoryDetailResponse } from '@/api/interface/payment'
import { getMyPageOrderHistoryDetail, getOrderHistory, getUserInfo } from '@/api/service/myPage'
import error from 'next/error'

export default function MyOrderHistory() {
  const [getStartDate, setGetStartDate] = useState<Date | null>(null)
  const [getEndDate, setGetEndDate] = useState<Date | null>(null)
  const [showOrderHistory, setShowOrderHistory] = useState(true)
  const [activePage, setActivePage] = useState<number>(0)
  const { orderHistories } = useGetOrderHistories()
  const [detailInfo, setDetailInfo] = useState<OrderHistoryDetailResponse | null | undefined>(null)
  // const [detailInfo, setDetailInfo] = useState<OrderHistoryDetailResponse>(initialDetailInfo)

  useEffect(() => {
    const fetchDetailInfo = async () => {
      try {
        // id 값을 가져오는 비동기 함수 호출
        const userIdResponse = await getUserInfo()
        const id = userIdResponse.data?.id

        // orderId 값을 가져오는 비동기 함수 호출
        const orderIdResponse = await getOrderHistory(activePage)
        const orderId = orderIdResponse.data.orderId

        if (id && orderId) {
          const detailInfoResponse = await getMyPageOrderHistoryDetail(id, orderId)
          setDetailInfo(detailInfoResponse)
        } else {
          console.log(error)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchDetailInfo()
  }, [activePage])

  return (
    <section className="flex w-[97%] flex-col">
      {/* 주문내역 타이틀, 내역 갯수 */}
      <h1 className="mt-10 w-full text-[2.4rem] font-semibold dark:text-neutral-navy-100">
        주문내역
        <span className="mb-2 text-[1.8rem] font-normal">
          ({orderHistories?.data?.totalElement})
        </span>
      </h1>
      <div className="mb-8 mt-6 w-full">
        <MyOrderCalendar
          setGetStartDate={function (value: SetStateAction<string>): void {
            throw new Error('Function not implemented.')
          }}
          setGetEndDate={function (value: SetStateAction<string>): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
      <div className="h-[70%] w-full">
        <div className="mx-1 my-3 flex h-[2.5rem] w-full items-end justify-between text-[1.2rem] dark:text-neutral-navy-100">
          <span className="mr-[19rem]">주문일자</span>
          <span className="mr-[32.2rem]">주문번호</span>
          <span className="mr-[5.8rem]">구매한 에셋 수</span>
          <span className="mr-[0.8rem] text-right">결제금액</span>
        </div>
        {showOrderHistory ? (
          <>
            <MyOrderHistoryList
              orderHistories={orderHistories?.data.orderList}
              detailInfo={undefined}
            />
            <PaginationButton
              activePage={activePage}
              setActivePage={setActivePage}
              pages={orderHistories?.data.totalPage}
            />
          </>
        ) : (
          <>
            <div className="text-[2.2rem]">주문 내역이 없습니다.</div>
          </>
        )}
      </div>
    </section>
  )
}
