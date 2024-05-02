'use client'
import React from 'react'
import Image from 'next/image'
import AssetList from '../assets/AssetList'
import { useCategoryAssets } from '@/hooks/useGetAssets'

interface Props {
  categoryName: string
}

export default function CategoryAssetList({ categoryName }: Props) {
  const { categoryAssets } = useCategoryAssets(0, categoryName)
  return (
    <>
      <div className="mb-[2.4rem] flex h-[4.4rem] items-center justify-between">
        <div className="rounded-1/2 rounded-full border border-neutral-navy-300 px-[2.4rem] py-[1.1rem] text-sl">
          <button>{categoryName}</button>
        </div>
      </div>
      <AssetList assets={categoryAssets?.data.assetList} swipeable={true} />
    </>
  )
}
