import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CategoryAsset() {
  return (
    <div className="mb-[0.9rem] border-b border-neutral-navy-200 py-[0.4rem]">
      <Link href="/" className="flex p-[0.8rem] text-neutral-navy-200">
        <Image
          src="/icons/assetList.svg"
          alt="에셋 리스트"
          width={24}
          height={24}
          className="mr-[1.6rem]"
        />
        <p>에셋 리스트</p>
      </Link>
      <ul>
        <li>
          <Link href="#" className="flex p-[0.8rem] pl-[2.4rem] text-neutral-navy-200">
            <Image
              src="/icons/box.svg"
              alt="개별 에셋"
              width={20}
              height={20}
              className="mr-[1.6rem]"
            />
            <p>개별 에셋</p>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex p-[0.8rem] pl-[2.4rem] text-neutral-navy-200">
            <Image
              src="/icons/packageAsset.svg"
              alt="개별 에셋"
              width={20}
              height={20}
              className="mr-[1.6rem]"
            />
            <p>패키지 에셋</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
