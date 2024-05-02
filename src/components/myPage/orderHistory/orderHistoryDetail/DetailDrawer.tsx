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
    <div className="no-scrollbar absolute min-h-[71rem] w-full overflow-y-scroll border-l border-transparent-navy-30 bg-bg-0">
      <section>{children}</section>
    </div>
  ) : null
}
