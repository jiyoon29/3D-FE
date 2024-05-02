import { usePostReview } from '@/hooks/usePostReview'
import { setClickedReview } from '@/store/clickedReviewSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

interface Props {
  reviewId: number
  assetId: number
  setIsShownCreateReview: (data: boolean) => void
  setIsEditMode: (data: boolean) => void
  setIsShownReviewMenu: (data: boolean) => void
}

export default function ReviewMenu({
  reviewId,
  assetId,
  setIsShownCreateReview,
  setIsEditMode,
  setIsShownReviewMenu,
}: Props) {
  const { deleteMyReview } = usePostReview(assetId, reviewId)
  const dispatch = useDispatch()

  const handleEdit = () => {
    dispatch(setClickedReview(reviewId))
    setIsShownCreateReview(true)
    setIsEditMode(true)
    setIsShownReviewMenu(false)
  }
  const handleDelete = () => {
    deleteMyReview()
    setIsEditMode(false)
  }

  return (
    <ul
      className="absolute left-[-17.2rem] top-1/2 h-[5.8rem] w-[18.2rem] rounded-[0.4rem]
     border border-neutral-navy-100 bg-bg-1"
    >
      <li
        onClick={handleEdit}
        className="flex h-1/2 cursor-pointer items-center rounded-t-[0.4rem] border-b pl-[1.2rem]  hover:bg-bg-2"
      >
        Edit
      </li>
      <li
        onClick={handleDelete}
        className="flex h-1/2 cursor-pointer items-center rounded-[0.4rem] pl-[1.2rem] hover:border-0 hover:bg-bg-2"
      >
        Delete
      </li>
    </ul>
  )
}
