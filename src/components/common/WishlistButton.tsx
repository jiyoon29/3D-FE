import Image from 'next/image'

export default function WishlistButton() {
  return (
    <button className="h-[4rem] w-[4rem] rounded-[0.4rem] bg-transparent-navy-15 text-neutral-100 hover:bg-transparent-navy-30">
      <Image src="/icons/heart.svg" alt="copy" width={24} height={24} className="m-auto" />
    </button>
  )
}
