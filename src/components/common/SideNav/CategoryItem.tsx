'use client'

import React, { useState, MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import { RootState } from '@/store/store'
import { selectCategory, selectSubCategory } from '@/store/categorySlice'
import { Category } from '@/api/interface/category'

interface Props {
  category: Category
  // handleSubcategoryClick: (subcategory: Subcategory) => void
}

export default function CategoryItem({ category }: Props) {
  const { name, tagList, subCategoryList, subName } = useSelector(
    (state: RootState) => state.category,
  )

  // console.log({ name }, { subName }, category.categoryName)

  const params = useParams()

  const [isOpened, setIsOpened] = useState(false)

  const dispatch = useDispatch()
  const pathname = usePathname()
  const categoryParams = pathname!.match(/\/category\/(.+)/)?.[0]
  // console.log({ categoryParams })

  const handleCategoryClick = (e: MouseEvent<HTMLLIElement>, category: Category) => {
    // e.stopPropagation()
    dispatch(selectCategory(category))
    setIsOpened((prev) => !prev)
  }

  return (
    <ul className="py-[0.4rem] text-sm leading-[2.4rem]">
      <li
        onClick={(e) => handleCategoryClick(e, category)}
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

      {category.categoryName === name && (
        <ul>
          {subCategoryList.map((item) => (
            <li key={item.name} onClick={() => dispatch(selectSubCategory(item.name))}>
              <Link
                href={`/categories/${name}/${item.name}`}
                className="flex w-full justify-between py-[0.2rem] pl-[3.2rem] pr-[1.2rem] text-neutral-navy-200"
              >
                <p
                  className={`${
                    item.name === subName && name === category.categoryName && 'text-primary-main'
                  }`}
                >
                  {item.name}
                </p>
                <span className={`${item.name === subName && 'text-primary-main'}`}>
                  {item.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </ul>
  )
}
