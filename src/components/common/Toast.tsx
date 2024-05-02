'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Toast({ message }: { message: string }) {
  const [showToast, setShowToast] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!showToast) return null

  return (
    <div className="fixed right-[4.4rem] top-[6.4rem] z-20 flex h-[3rem] min-w-[16rem] items-center rounded-sm bg-neutral-navy-850 px-[0.8rem] text-sm text-neutral-navy-100">
      <Image
        src="/icons/tip.svg"
        alt="삼각형"
        width={8}
        height={4}
        className="absolute bottom-[100%] right-[50%] translate-x-1/2"
      />
      <div className="mr-[0.4rem] h-[1.6rem] w-[1.6rem]">
        <Image src="/icons/info.svg" alt="정보" width={16} height={16} />
      </div>
      <p>{message}</p>
    </div>
  )
}
