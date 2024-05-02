'use client'
import React from 'react'
import Image from 'next/image'
import CategoryAssetList from './CategoryAssetList'

interface Props {
  categoryList: string[]
}

export default function CategoryAssetContainer({ categoryList }: Props) {
  return (
    <section className="min-h-[calc(100vh-12.3rem)] px-[2.3rem] pt-8  text-neutral-navy-100">
      <div className="mb-[2.5rem] h-[5.2rem] w-full  text-lg font-bold leading-[3rem]">
        카테고리 별
      </div>
      {categoryList.map((category) => (
        <CategoryAssetList key={category} categoryName={category} />
      ))}
    </section>
  )
}
