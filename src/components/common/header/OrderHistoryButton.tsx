'use client'
import Link from 'next/link'

interface Props {
  setSelectedTab: (prev: boolean) => void
  selectedTab: boolean
}

export default function OrderHistoryButton({ setSelectedTab, selectedTab }: Props) {
  return (
    <p className="text-neutral-navy-100">주문 내역</p>
    // <Link href="/my-page/orderHistory" className="text-neutral-navy-100">
    //   주문 내역
    // </Link>
  )
}
