'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import CompleteItem from './CompleteItem'
import { getOrderComplete } from '@/api/service/payments'
import { OrderProductList } from '@/api/interface/payment'
import { useUser } from '@/hooks/useUser'

export default function CompleteTable() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const [data, setData] = useState<OrderProductList[]>([])
  const { userId } = useUser()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (orderId) {
          const response = await getOrderComplete(userId, orderId)
          setData(response.data.orderProductList)
        }
      } catch (error) {
        console.error('구매완료 정보 실패 :', error)
      }
    }

    fetchData()
  }, [userId, orderId])

  console.log(data)
  return (
    <table className="mx-auto mb-[11.1rem] w-[72.077%]">
      <thead>
        <tr className="h-[5rem] w-[100%] border-b-2 border-transparent-navy-15 text-neutral-200">
          <th className="w-[6.6%] text-sm">
            <p>대표이미지</p>
          </th>
          <th className="w-[70.7%] text-sm">
            <p>이름 및 상세설명</p>
          </th>
          <th className="w-[20.7%] pr-[2.4rem] text-right text-sm">
            <p>가격</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <CompleteItem key={item.assetId} item={item} />
        ))}
      </tbody>
    </table>
  )
}
