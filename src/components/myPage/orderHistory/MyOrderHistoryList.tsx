/**
 * 마이페이지-주문내역
 */

import MyOrderHistoryItem from './MyOrderHistoryItem'
import { OrderHistory, OrderHistoryDetailResponse } from '@/api/interface/payment'

interface OrderHistoryProps {
  orderHistories: OrderHistory[] | undefined
  detailInfo: OrderHistoryDetailResponse | undefined
}

export default function MyOrderHistoryList({ orderHistories, detailInfo }: OrderHistoryProps) {
  if (!orderHistories) return null

  return (
    <>
      <ul className="flex flex-col">
        {orderHistories.map((orderHistory) => (
          <MyOrderHistoryItem
            key={orderHistory.orderId}
            orderHistory={orderHistory}
            detailInfo={detailInfo}
          />
        ))}
      </ul>
    </>
  )
}
