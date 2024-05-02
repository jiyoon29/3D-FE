'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Category } from '@/api/interface/category'
import Tags from './Tags'
import CategoryItem from './CategoryItem'

interface Props {
  categories: Category[]
}

export default function CategoryList({ categories }: Props) {
  const { name, tagList } = useSelector((state: RootState) => state.category)
  const dispatch = useDispatch()

  return (
    <>
      <div className="p-[0.8rem]">
        <div className="mb-[0.9rem] border-y border-neutral-navy-200 leading-[2.4rem]">
          <div className=" p-[0.8rem] text-neutral-navy-200">
            <Link href="/" className="flex">
              <Image
                src="/icons/list.svg"
                alt="개별 에셋"
                width={20}
                height={20}
                className="mr-[1.6rem]"
              />
              <p>카테고리별</p>
            </Link>
          </div>
          <ul>
            <li className=" cursor-pointer text-sm leading-[2.4rem]">
              <Link
                href="/categories"
                className="flex w-full justify-between py-[0.2rem] pl-[2.4rem] pr-[1.2rem] text-neutral-navy-200"
              >
                <p className="flex">All</p>
                <span>{categories.length}</span>
              </Link>
            </li>

            {categories.map((category) => (
              <CategoryItem key={category.categoryName} category={category} />
            ))}
          </ul>
        </div>
        <Tags selectedTags={tagList} />
      </div>
    </>
  )
}
