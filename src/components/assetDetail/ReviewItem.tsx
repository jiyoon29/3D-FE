import React, { useState, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { Review } from '@/api/interface/review'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import ReviewMenu from './ReviewMenu'
import Rating from '../common/Rating'

interface Props {
  review: Review
  assetId: number
  isShownCreateReview: boolean
  setIsShownCreateReview: Dispatch<SetStateAction<boolean>>
  setIsEditMode: Dispatch<SetStateAction<boolean>>
}

export default function ReviewItem({
  review,
  assetId,
  setIsShownCreateReview,
  setIsEditMode,
}: Props) {
  const userId = useSelector((state: RootState) => state.user.userId)
  const [isShownReviewMenu, setIsShownReviewMenu] = useState(false)

  const toggleMenu = () => {
    setIsShownReviewMenu((prev) => !prev)
  }

  console.log({ review })

  return (
    <li className="mb-[0.8rem] w-full rounded-[0.4rem] bg-neutral-navy-900">
      <div className="px-[1.2rem] py-[0.8rem]">
        <div className="mb-[0.8rem] flex h-[3.8rem] items-center justify-between text-mm font-normal">
          <div className="text-neutral-navy-200">
            <span>
              작성자 : {review.lastName}
              {review.firstName}
            </span>
          </div>
          <Rating star={review.rating} size={13} />
          {review?.userId === userId && (
            <div className="relative flex">
              <button onClick={toggleMenu}>
                <Image src="/icons/moreVertical.svg" alt="menu" width={24} height={24} />
              </button>
              {isShownReviewMenu && (
                <ReviewMenu
                  reviewId={review.reviewId}
                  assetId={assetId}
                  setIsShownCreateReview={setIsShownCreateReview}
                  setIsEditMode={setIsEditMode}
                  setIsShownReviewMenu={setIsShownReviewMenu}
                />
              )}
            </div>
          )}
        </div>
        <div className="mb-[0.8rem] text-mm  font-normal text-neutral-navy-100">
          <span>{review.content}</span>
        </div>
      </div>
    </li>
  )
}
