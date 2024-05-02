'use client'

import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { OrderHistory, OrderHistoryDetailResponse } from '@/api/interface/payment'
import { formatPrice } from '@/utils/formatPrice'
import { setClickedOrderHistory } from '@/store/clickedOrderHistorySlice'
import { hideOrderHistoryDetail, showOrderHistoryDetail } from '@/store/orderHistoryDetailSlice'
import DetailDrawer from './orderHistoryDetail/DetailDrawer'
import MyOrderDetail from './orderHistoryDetail/MyOrderDetail'

interface MyOrderHistoryItemProps {
  orderHistory: OrderHistory
  detailInfo: OrderHistoryDetailResponse | undefined
}
export default function MyOrderHistoryItem({ orderHistory, detailInfo }: MyOrderHistoryItemProps) {
  const [showItemDetail, setShowItemDetail] = useState(false)
  const dispatch = useDispatch()

  const handleOrderNumberClick = () => {
    dispatch(setClickedOrderHistory(orderHistory.orderId))
    console.log(setClickedOrderHistory(orderHistory.orderId), 'handleOrderNumberClick')

    if (showItemDetail) {
      dispatch(hideOrderHistoryDetail())
    } else {
      dispatch(showOrderHistoryDetail())
    }

    setShowItemDetail(!showItemDetail)
  }

  return (
    <>
      <li
        onClick={handleOrderNumberClick}
        className="my-4 flex h-[3.75rem] w-full justify-between border-b border-neutral-navy-300 pb-3 text-[0.8rem] hover:cursor-pointer hover:border-b hover:border-sky-500"
      >
        <span className="mr-[11.5rem] pt-3">{orderHistory.orderDate}</span>
        <span className="mr-[25rem] text-[1.2rem] underline underline-offset-4">
          {orderHistory.orderNumber}
        </span>
        <span className="pt-3">{orderHistory.assetCount}&nbsp;개</span>
        <span className="text-[1.2rem]">{formatPrice(orderHistory.totalPrice)}</span>
      </li>
      {/* {showItemDetail && <div className="h-96 w-full bg-sky-700"></div>} */}

      {showItemDetail && <MyOrderDetail detailInfo={detailInfo} />}
    </>
  )
}
