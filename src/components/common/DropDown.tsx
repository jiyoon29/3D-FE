'use client'

import Image from 'next/image'
import { useState } from 'react'

interface dropdownProps {
  list: string[]
  width?: string
  height?: string
  selectedItem: string
  setSelectedItem: (item: string) => void
}
export default function DropDown({
  list,
  width = '12rem',
  height = '3rem',
  selectedItem = list[0],
  setSelectedItem,
}: dropdownProps) {
  const [btnClick, setBtnClick] = useState(false)
  return (
    <>
      <div className="relative" style={{ width, height }}>
        <div
          className="flex cursor-pointer items-center justify-between rounded-sm border border-none bg-bg-4 px-4 py-2"
          // onClick={() => setBtnClick((prev) => !prev)}
          onClick={() => setBtnClick(!btnClick)}
        >
          <div className="">{selectedItem}</div>
          <Image
            alt="copy"
            width={14}
            height={14}
            src={'/icons/arrowDropDown.svg'}
            className={`transform transition-transform ${btnClick ? 'rotate-180' : ''}`}
          />
        </div>
        {btnClick && (
          <div className="absolute right-0 mt-1 w-full origin-top-right text-neutral-navy-100 ring-1 ring-black ring-opacity-5">
            <div className="rounded-sm bg-bg-4 py-1 text-center  ">
              {list.map((item) => (
                <div
                  key={item}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-bg-2 hover:text-neutral-navy-100`}
                  onClick={() => {
                    setSelectedItem(item)
                    setBtnClick(!btnClick)
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
