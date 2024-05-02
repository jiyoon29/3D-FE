'use client'

import React, { useState } from 'react'
import AssetList from './AssetList'
import PaginationButton from '../common/PaginationButton'
import { useSubCategoryAssets } from '@/hooks/useGetAssets'
import { usePathname } from 'next/navigation'

export default function CategoryByAsset() {
  const pathname = usePathname()
  const category = pathname.split('/')[2]
  const subCategory = pathname.split('/')[3]
  //   const extractedPath = currentPath ? currentPath[1] : ''
  console.log(category, subCategory)

  const [activePage, setActivePage] = useState(0)
  const { categoryAssets } = useSubCategoryAssets(activePage, category, subCategory)
  console.log({ categoryAssets })

  return (
    <section className="min-h-[calc(100vh-12.3rem)] px-[2.3rem] pt-8">
      <div className="w-full">
        <div className=" mb-[2.5rem] h-[3rem] text-neutral-navy-100">
          <span className="text-lg font-bold leading-[3rem]">{subCategory} </span>
          <span className="text-sl">({categoryAssets?.data?.totalElement})</span>
        </div>
      </div>
      <AssetList assets={categoryAssets?.data?.assetList} swipeable={false} />
      <PaginationButton
        activePage={activePage}
        setActivePage={setActivePage}
        pages={categoryAssets?.data?.totalPage}
      />
    </section>
  )
}
