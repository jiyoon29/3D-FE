'use client'

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { RootState } from '@/store/store'
import { selectedCategory } from '@/store/categorySlice'
import { Category } from '@/api/interface/category'
import { getAllCategories } from '@/api/service/category'
import { setSelectedTags } from '@/store/tagSlice'

interface Props {
  category: Category
  // handleSubcategoryClick: (subcategory: Subcategory) => void
}

export default function CategoryItem({ category }: Props) {
  const { name, tagList, subCategoryList } = useSelector((state: RootState) => state.category)
  const [isOpened, setIsOpened] = useState(false)
  const dispatch = useDispatch()

  const handleCategoryClick = (category: Category) => {
    dispatch(selectedCategory(category))
    setIsOpened((prev) => !prev)
  }

  return (
    <ul className="py-[0.4rem] text-sm leading-[2.4rem]">
      <li
        onClick={() => handleCategoryClick(category)}
        className="flex w-full cursor-pointer justify-between py-[0.2rem] pl-[2.4rem] pr-[1.2rem] text-neutral-navy-200"
      >
        <p className="flex">
          {category.categoryName}
          {category.subCategoryList.length > 0 && (
            <Image
              src="/icons/arrowDropDown.svg"
              alt="아래화살표"
              width={18}
              height={18}
              className="ml-[0.2rem]"
            />
          )}
        </p>
        <span>{category.categoryCount}</span>

      </li>
      {isOpened && (
        <ul>
          {subCategoryList.map((item) => (
            <li key={item.name}>
              <Link
                href={`/category/${item.name}`}
                className="flex w-full justify-between py-[0.2rem] pl-[3.2rem] pr-[1.2rem] text-neutral-navy-200"
              >
                <p>{item.name}</p>
                <span>{item.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </ul>
  )
}
