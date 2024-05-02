import Image from 'next/image'

interface Props {
  tags: string[]
}

export default function AssetTags({ tags }: Props) {
  return (
    <div className="item-center flex ">
      <Image src="/icons/tag.svg" alt="tag" width={24} height={24} className="mr-2" />
      <ul>
        {tags.map((tag, i) => (
          <li
            className="mr-2  inline-flex h-[3.6rem] items-center
            justify-center rounded-[0.4rem] border border-transparent-navy-second bg-neutral-navy-900 px-2 py-1"
            key={i}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}
