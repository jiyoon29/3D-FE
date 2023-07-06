'use client'

import { Asset } from '@/api/interface/asset'
import AssetItem from './AssetItem'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface Props {
  assets: Asset[] | undefined
  swipeable: boolean
}

export default function AssetList({ assets, swipeable }: Props) {
  if (!assets) return null

  return (
    <ul className="mb-[6.4rem] flex flex-wrap gap-2">
      {swipeable ? (
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {assets.map((asset) => (
            <SwiperSlide key={asset.assetId}>
              <AssetItem asset={asset} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        assets.map((asset) => <AssetItem key={asset.assetId} asset={asset} />)
      )}
    </ul>
  )
}

//mt-6 grid gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
