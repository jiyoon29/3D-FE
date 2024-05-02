'use client'

import { RootState } from '@/store/store'
import { ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface Props {
  children: ReactNode
}

export default function Drawer({ children }: Props) {
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen)

  return isOpen ? (
    <section className="sticky top-[7.2rem] z-10 h-[calc(100vh-7.2rem)]">
      <div className="no-scrollbar h-full min-w-[71rem] overflow-y-scroll border-l border-transparent-navy-30 bg-bg-0">
        <section>{children}</section>
      </div>
    </section>
  ) : null
}
