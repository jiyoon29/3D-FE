'use client'
import React, { useState, useEffect } from 'react'

type CustomCheckboxProps = {
  id: string
  className?: string
  size?: number
  onChange?: (isChecked: boolean) => void
  children?: React.ReactNode
  isChecked?: boolean
}

const sizes: Record<number, string> = {
  2: 'w-[0.2rem] h-[0.2rem]',
  4: 'w-[0.4rem] h-[0.4rem]',
  8: 'w-[0.8rem] h-[0.8rem]',
  12: 'w-[1.2rem] h-[1.2rem]',
  16: 'w-[1.6rem] h-[1.6rem]',
  24: 'w-[2.4rem] h-[2.4rem]',
  32: 'w-[3.2rem] h-[3.2rem]',
}

function CustomCheckbox({
  id,
  className,
  size = 32,
  onChange,
  children,
  isChecked = false,
}: CustomCheckboxProps) {
  const sizeClass = sizes[size] || ''
  const [isCheckedInternal, setIsCheckedInternal] = useState(isChecked) // isCheckedInternal 상태 추가

  useEffect(() => {
    setIsCheckedInternal(isChecked) // isChecked prop이 변경되면 isCheckedInternal 상태 업데이트
  }, [isChecked])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setIsCheckedInternal(checked) // isCheckedInternal 상태 변경
    if (onChange) {
      onChange(checked)
    }
  }

  return (
    <>
      <input
        type="checkbox"
        id={id}
        className="hidden"
        checked={isCheckedInternal}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={id} className={`flex items-center ${className}`}>
        <div className={`mx-auto ${sizeClass} bg-checkbox-off bg-cover`}></div>
        {children}
      </label>
    </>
  )
}

export default CustomCheckbox
