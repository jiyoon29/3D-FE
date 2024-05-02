import React from 'react'
import Stars from './icon/Stars'

interface Props {
  star: number
  size: number
}

export default function Rating({ star = 0, size }: Props) {
  return (
    <div
      className={`${size < 20 ? 'w-[15.3rem]' : 'w-[20.2rem]'} flex items-center justify-between`}
    >
      <span className={`${size < 20 && 'text-mm'} text-[2.6rem] font-bold text-primary-main`}>
        {star}
      </span>
      <div className="relative flex w-[13rem]">
        <div className={`absolute left-0 top-1/2 flex -translate-y-1/2 transform`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="mr-[0.8rem]">
              <Stars key={index} isFilled={false} size={size} />
            </li>
          ))}
        </div>
        <div className={`absolute left-0 top-1/2 flex -translate-y-1/2 transform overflow-hidden`}>
          {Array.from({ length: star }).map((_, index) => (
            <li key={index} className="mr-[0.8rem]">
              <Stars key={index} isFilled={true} size={size} />
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}
