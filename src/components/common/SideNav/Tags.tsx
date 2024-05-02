import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TagsProps {
  selectedTags: string[]
}

export default function Tags({ selectedTags }: TagsProps) {
  if (selectedTags.length === 0) {
    return null
  }

  return (
    <div className="px-[0.8rem]">
      <Link href="/" className="text-neutral-navy-200">
        <div className="flex items-center justify-between text-base text-primary-main">
          <Image
            src="/icons/tag.svg"
            alt="태그"
            width={32}
            height={32}
            className="mr-[0.2rem] p-[0.6rem]"
          />
          <p className="w-full">Detail Tags</p>
          <Image src="/icons/chevronDownBlue.svg" alt="아래 화살표" width={24} height={24} />
        </div>
        <ul className="flex flex-wrap gap-4 px-[0.8rem] py-4">
          {selectedTags.map((tag) => (
            <li key={tag} className="">
              <Link
                href="#"
                className="block rounded-[0.2rem] border border-transparent-navy-30 bg-neutral-navy-900 px-[0.8rem] py-[0.4rem] text-sm text-neutral-navy-200"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </Link>
    </div>
  )
}
