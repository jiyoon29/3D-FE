'use client'

import { AssetDetail } from '@/api/interface/asset'
import WishlistButton from '../common/WishlistButton'
import Image from 'next/image'
import AssetTags from '../assets/AssetTags'
import ThreeModel from '../common/threeModel/ThreeModel'

interface Props {
  asset: AssetDetail
}

export default function AssetDetailContent({ asset }: Props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(asset.fileUrl)
  }

  const isCheckImage = asset.fileUrl.includes('thumbnail/')

  return (
    <>
      <div className=" h-[52.3rem] border-b border-transparent-navy-30 bg-bg-2 pt-[4.7rem]">
        {/* <ThreeModel fileUrl={asset.fileUrl} /> */}
        <Image
          src={
            isCheckImage
              ? `${process.env.NEXT_PUBLIC_S3_URL}/${asset.fileUrl}`
              : '/icons/cameraOff.svg'
          }
          alt="detail"
          width={`${isCheckImage ? 385 : 48}`}
          height={`${isCheckImage ? 140 : 48}`}
          className="mx-auto flex items-center"
        />
      </div>
      <article className="h-full px-6 pb-10 pt-6 text-neutral-navy-100">
        <div className="mb-6 flex h-[5.6rem] items-center justify-between">
          <div className="w-[44.1rem] text-lg font-semibold">
            <h2>{asset.assetName}</h2>
          </div>
          <div className="flex">
            <div className="mr-[1.2rem] flex h-[4rem] w-[15.7rem] cursor-pointer justify-center rounded-[0.4rem] bg-transparent-navy-15 text-neutral-100 hover:bg-transparent-navy-30">
              <button onClick={handleCopy} className="flex items-center ">
                <span className="block">URL Copy</span>
                <Image
                  src="/icons/copy.svg"
                  alt="copy"
                  width={24}
                  height={24}
                  className="ml-[0.9rem]"
                />
              </button>
            </div>
            <div>
              <WishlistButton />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex h-[4.4rem] w-[100%] items-center border-t border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">확장자</h3>
            <p className="ml-[1.6rem]">{asset.extension}</p>
          </div>
          <div className="flex h-[4.4rem] w-[100%] items-center border-t border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">평점</h3>
            <div className="flex">
              <Image
                src="/icons/thumbsUp.svg"
                alt="left"
                width={13}
                height={13}
                className="ml-[1.6rem]"
              />
              <p className="ml-[0.4rem]">
                {asset.rating}점({asset.reviewCount}개)
              </p>
            </div>
          </div>
          <div className="flex h-[4.4rem] w-[100%] items-center border-t border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">방문자 수</h3>
            <div className="flex">
              <Image
                src="/icons/eye.svg"
                alt="left"
                width={13}
                height={13}
                className="ml-[1.6rem]"
              />
              <p className="ml-[0.4rem]">{asset.visitCount}</p>
            </div>
          </div>
          <div className="flex h-[4.4rem] w-[100%] items-center border-t border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">찜하기 수</h3>
            <div className="flex">
              <Image
                src="/icons/heart.svg"
                alt="left"
                width={13}
                height={13}
                className="ml-[1.6rem]"
              />
              <p className="ml-[0.4rem]">{asset.wishCount}</p>
            </div>
          </div>
          <div className="flex h-[4.4rem] items-center border-t border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">파일 크기</h3>
            <div className="flex w-1/2">
              <Image
                src="/icons/file.svg"
                alt="left"
                width={13}
                height={13}
                className="ml-[1.6rem]"
              />
              <p className="ml-[0.4rem]">{asset.fileSize}</p>
            </div>
          </div>
          <div className="flex h-[4.4rem] items-center border-y border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">제작자</h3>
            <div className="flex w-1/2">
              <Image
                src="/icons/user.svg"
                alt="left"
                width={13}
                height={13}
                className="ml-[1.6rem]"
              />
              <p className="ml-[0.4rem]">{asset.creator}</p>
            </div>
          </div>
        </div>
        <div className="mb-[2.4rem] bg-neutral-navy-900 px-3 py-4">
          <div>{asset.description}</div>
        </div>
        <AssetTags tags={asset.tagList} />
        <div className="h-[10.5rem]"></div>
      </article>
    </>
  )
}
