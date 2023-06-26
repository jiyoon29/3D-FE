import React from 'react'
import Title from '@/components/common/Title'

interface CartHeaderProps {
  itemCount: number
  selectedCount: number
  onDeleteAll: () => void
  onDeleteSelected: () => void
}

export default function CartHeader({
  itemCount,
  selectedCount,
  onDeleteAll,
  onDeleteSelected,
}: CartHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-baseline">
        <Title tit="장바구니" mb={0} />
        <p className="ml-[0.8rem] text-sl text-neutral-navy-200">
          &#40;<span className="text-primary-main">{selectedCount}</span>/{itemCount}&#41;
        </p>
      </div>
      <div className="flex">
        <button
          className="h-[2.8rem] w-[12rem] rounded-sm border border-transparent-navy-30 text-sm"
          onClick={onDeleteAll}
        >
          전체 삭제
        </button>
        <button
          className="ml-[1.6rem] h-[2.8rem] w-[12rem] rounded-sm border border-transparent-navy-30 text-sm"
          onClick={onDeleteSelected}
        >
          선택 항목 삭제
        </button>
      </div>
    </div>
  )
}
