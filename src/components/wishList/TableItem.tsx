'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { formatPrice } from '@/utils/formatPrice'
import CustomCheckbox from '../common/CustomCheckbox'
// import IconButton from './IconButton'
import { BlueCartIcon, BlueTrashIcon, CartIcon, TrashIcon } from '../common/icon/Icon'

interface TableItemProps {
  assetId: number
  image: string
  assetName: string
  extension: string
  size: number
  price: number
  icon: React.ReactNode
}

export default function TableItem({
  assetId,
  image = '',
  assetName,
  extension,
  size,
  price,
  icon,
}: TableItemProps) {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <>
      <tr className="border-b border-neutral-navy-300 ">
        <td className="h-[10rem] py-[1rem] ">{/* <CustomCheckbox id={assetId} /> */}</td>
        <td className="h-[10rem] py-[1rem] ">
          <Image src={image} alt="asset" width={80} height={100} className="min-w-[8rem]" />
        </td>
        <td className="h-[10rem] py-[1rem] ">
          <div className="px-[1.2rem]">
            <h4 className="text-[2rem] font-medium">{assetName}</h4>
            <ul className="flex flex-wrap items-center text-sm">
              <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem] after:w-[0.1rem] after:bg-transparent-navy-30">
                {`확장자 : ${extension}`}
              </li>
              <li className="flex items-center after:bg-transparent-navy-30">
                {`데이터 용량 : ${size}KB`}
              </li>
            </ul>
          </div>
        </td>
        <td className="h-[10rem] py-[1rem] ">
          <div className="px-[2.4rem] text-right text-sl">
            <p>{formatPrice(price)}</p>
          </div>
        </td>
        <td className="h-[10rem] py-[1rem]">
          {/* <IconButton icon1={<CartIcon />} icon2={<BlueCartIcon />} /> */}
        </td>
        <td className="h-[10rem] py-[1rem]">
          {/* <IconButton icon1={<TrashIcon />} icon2={<BlueTrashIcon />} /> */}
        </td>
      </tr>
    </>
  )
}
