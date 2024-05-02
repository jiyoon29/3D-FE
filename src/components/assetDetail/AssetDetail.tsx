'use client'

import { useState } from 'react'
import AssetDetailContent from './AssetDetailContent'
import AssetDetailNav from './AssetDetailNav'
import AssetDetailAddCart from './AssetDetailAddCart'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import AssetDetailReview from './AssetDetailReview'
import { useAssetDetail } from '@/hooks/useAssetDetail'

export default function AssetDetail() {
  const { assetId } = useSelector((state: RootState) => state.clickedAsset)
  const { asset } = useAssetDetail(assetId)

  const [selectedTab, setSelectedTab] = useState(true)

  return (
    <div>
      <AssetDetailNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab
        ? asset && <AssetDetailContent asset={asset} />
        : asset && <AssetDetailReview asset={asset} />}
      {asset && <AssetDetailAddCart asset={asset} />}
    </div>
  )
}
