import React from 'react'
// import CustomCheckbox from '../common/CustomCheckbox'

interface TableHeaderProps {
  text: string
}

export default function TableHeader({ text }: TableHeaderProps) {
  return (
    <thead className="">
      <tr className="w-[100%] border-b border-neutral-navy-300 text-sm text-neutral-navy-200">
        <td className="h-[4rem] w-[7.5%] py-[1rem] text-center  text-sm">
          {/* <CustomCheckbox id="all" /> */}
        </td>
        <td className="h-[4rem] w-[6.6%] py-[1rem] text-center text-sm ">
          <p>대표이미지</p>
        </td>
        <td className="h-[4rem] w-[48.6%] py-[1rem] text-sm ">
          <p>이름 및 상세설명</p>
        </td>
        <td className="h-[4rem] w-[20.7%] py-[1rem] pr-[2.4rem] text-right text-sm ">
          <p>가격</p>
        </td>
        <td className="h-[4rem] w-[8.3%] py-[1rem] text-center text-sm ">
          <p>{text}</p>
        </td>
        <td className="h-[4rem] w-[8.3%] py-[1rem] text-center text-sm ">
          <p>삭제</p>
        </td>
      </tr>
    </thead>
  )
}
