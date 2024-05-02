import React from 'react'

interface Props {
  size: number
  isFilled: boolean
}

export default function Stars({ isFilled, size }: Props) {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1L15.399 7.91167L23 9.02681L17.5 14.4038L18.798 22L12 18.4117L5.202 22L6.5 14.4038L1 9.02681L8.601 7.91167L12 1Z"
          fill={isFilled ? '#3399FF' : '#C7D1DB'}
        />
      </svg>
    </div>
  )
}
