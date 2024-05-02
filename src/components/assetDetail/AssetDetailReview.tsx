import React, { useState } from 'react'
import { AssetDetail } from '@/api/interface/asset'
import ReviewList from './ReviewList'
import Rating from '../common/Rating'

interface Props {
  asset: AssetDetail
}

export default function AssetDetailReview({ asset }: Props) {

  return (
    <>
      <div className="pt-[4.7rem]"></div>
      <article className="h-full p-6 text-neutral-navy-100">
        <div className="mb-[3.2rem] flex justify-between border-b border-transparent-navy-30 py-[1.4rem]">
          <h3 className="leading-[1.936rem]">Up down run down stairs</h3>
          <Rating star={asset.rating} size={20} />
        </div>
        <div>
          <ReviewList id={asset.assetId} />
        </div>
      </article>
    </>
  )
}
