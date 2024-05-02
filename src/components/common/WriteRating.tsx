import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import Stars from './icon/Stars'
import { PostReview } from '@/api/interface/review'

interface Props {
  reviewData: PostReview
  setReviewData: Dispatch<SetStateAction<PostReview>>
}

export default function WriteRating({ reviewData, setReviewData }: Props) {
  const ARRAY = [0, 1, 2, 3, 4]

  const [clicked, setClicked] = useState([false, false, false, false, false])

  const handleStarClick = (index: number) => {
    setReviewData({ ...reviewData, rating: index + 1 })
    let clickStates = [...clicked]
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false
    }
    setClicked(clickStates)
  }

  return (
    <section className="item-center flex justify-center">
      <span className="mr-[1.2rem] w-[2.1rem] text-mm">{reviewData.rating}</span>
      <ul className="flex w-[10rem] items-center">
        {ARRAY.map((item, index) => (
          <li className="mr-[0.8rem]" key={index} onClick={() => handleStarClick(item)}>
            <Stars size={13} isFilled={clicked[index]} />
          </li>
        ))}
      </ul>
    </section>
  )
}
