import { closeDrawer } from '@/store/drawerSlice'
import { useDispatch } from 'react-redux'

interface Props {
  setSelectedTab: (prev: boolean) => void
  selectedTab: boolean
}

export default function AssetDetailNav({ setSelectedTab, selectedTab }: Props) {
  const dispatch = useDispatch()

  const handleCloseDrawer = () => {
    dispatch(closeDrawer())
  }

  return (
    <div className="w-[70.9rem] flex h-[5rem] text-neutral-200 absolute top- bg-bg-0">
      <div
        onClick={() => setSelectedTab(true)}
        className={`${
          selectedTab ? 'bg-bg-2 border-primary-main' : 'border-transparent-navy-30 '
        } w-[31.5rem] flex justify-center items-center  border-b-[0.3rem] hover:bg-bg-2 hover:border-primary-main`}
      >
        <button>Asset Detail</button>
      </div>
      <div
        onClick={() => setSelectedTab(false)}
        className={`${
          !selectedTab ? 'bg-bg-2 border-primary-main ' : 'border-transparent-navy-30 '
        } w-[31.5rem] flex justify-center items-center  border-b-[0.3rem] hover:bg-bg-2 hover:border-primary-main`}
      >
        <button>
          Review <span>(0)</span>
        </button>
      </div>
      <div
        className="w-[8rem] flex justify-center items-center  border-transparent-navy-30 border-b-[0.3rem] hover:bg-bg-2 hover:border-primary-main"
        onClick={handleCloseDrawer}
      >
        <button>닫기</button>
      </div>
    </div>
  )
}
