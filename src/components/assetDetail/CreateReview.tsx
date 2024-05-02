'use client'

import { RootState } from '@/store/store'
import Image from 'next/image'
import { useState, FormEvent, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import WriteStar from '../common/WriteRating'
import { PostReview } from '@/api/interface/review'
import { usePostReview } from '@/hooks/usePostReview'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  id: number
  reviewData: PostReview
  setReviewData: Dispatch<SetStateAction<PostReview>>
  isEditMode: boolean
}

export default function CreateReview({ id, reviewData, setReviewData, isEditMode }: Props) {
  const { reviewId } = useSelector((state: RootState) => state.clickedReview)
  const [isPressedBtn, setIsPressedBtn] = useState(false)

  const { createMyReview, editMyReview } = usePostReview(id, reviewId)

  console.log({ reviewId })

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createMyReview(reviewData)
    setIsPressedBtn(false)
  }

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editMyReview(reviewData)
    setIsPressedBtn(false)
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewData({ ...reviewData, content: e.target.value })
  }

  return (
    <>
      {isEditMode ? (
        <>
          <div className="mb-[2rem] flex h-[4rem] justify-between">
            <h3>리뷰 작성하기</h3>
            <div className="h-[3.6rem] w-[18.1rem] rounded-[0.4rem] bg-neutral-navy-900 px-6 py-2">
              <WriteStar reviewData={reviewData} setReviewData={setReviewData} />
            </div>
          </div>
          <div className="mb-[2rem] flex h-[13.3rem] flex-col justify-between rounded-[0.4rem] bg-neutral-navy-900 px-[2.4rem] py-[1.2rem]">
            <textarea
              className="rounded-[0.4rem] bg-bg-0 px-[0.8rem] py-[0.4rem]"
              value={reviewData.content}
              onChange={handleChange}
            />

            <div className="flex items-center justify-center rounded-[0.4rem] bg-bg-0 px-[2.4rem] py-[0.8rem]">
              <form onSubmit={handleEdit}>
                <button type="submit" className="flex text-primary-main">
                  <Image src="/icons/edit.svg" alt="edit" width={24} height={24} />
                  <span className="ml-1">작성하기</span>
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mb-[2rem] flex h-[4rem] justify-between">
            <h3>리뷰 작성하기</h3>
            <div className="h-[3.6rem] w-[18.1rem] rounded-[0.4rem] bg-neutral-navy-900 px-6 py-2">
              <WriteStar reviewData={reviewData} setReviewData={setReviewData} />
            </div>
          </div>
          <div className="mb-[2rem] flex h-[13.3rem] flex-col justify-between rounded-[0.4rem] bg-neutral-navy-900 px-[2.4rem] py-[1.2rem]">
            {isPressedBtn ? (
              <textarea
                className="rounded-[0.4rem] bg-bg-0 px-[0.8rem] py-[0.4rem]"
                value={reviewData.content}
                onChange={handleChange}
              />
            ) : (
              <p>해당 제품에 대한 리뷰를 작성해주세요</p>
            )}
            <div className="flex items-center justify-center rounded-[0.4rem] bg-bg-0 px-[2.4rem] py-[0.8rem]">
              {isPressedBtn ? (
                <form onSubmit={handleCreate}>
                  <button type="submit" className="flex text-primary-main">
                    <Image src="/icons/edit.svg" alt="edit" width={24} height={24} />
                    <span className="ml-1">작성하기</span>
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPressedBtn(true)}
                  className="flex  text-primary-main"
                >
                  <Image src="/icons/edit.svg" alt="edit" width={24} height={24} />
                  <span className="ml-1">작성하기</span>
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
