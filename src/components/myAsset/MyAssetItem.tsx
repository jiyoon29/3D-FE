import { Asset } from '@/api/interface/asset'
import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'
import CustomCheckbox from '../common/CustomCheckbox'
import { useDispatch } from 'react-redux'
import { setClickedMyAsset } from '@/store/clickedMyAssetSlice'
import { openDrawer } from '@/store/drawerSlice'

interface AssetItemProps {
  myAsset: Asset
  // selectedAsset: string & number
  // setSelectedAsset: React.Dispatch<React.SetStateAction<string, Number>>
}

export default function AssetItem({ myAsset }: AssetItemProps) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setClickedMyAsset(myAsset.assetId))
    dispatch(openDrawer())
  }

  return (
    <li className="mb-3">
      <button
        onClick={handleClick}
        className="h-[30.4rem] min-w-[22.4rem] hover:rounded-[0.4rem] hover:border-2 hover:border-primary-main
    focus:rounded-[0.4rem] focus:border-2 focus:border-primary-main"
      >
        <div className="p-[0.4rem]">
          <div className="rounded ml-[0.4rem] h-[26.6rem] w-[20.6rem] rounded-sm bg-neutral-navy-300">
            이미지 자리
            <div className="flex justify-between px-4 pt-[20rem]">
              <CustomCheckbox id="MyAssetCheck" />
              <div className="h-[3.2rem] w-[3.2rem] rounded-sm bg-neutral-navy-850 p-2">
                <Image src={'/icons/download.svg'} width={24} height={24} alt="다운로드" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="ml-2 mt-1 flex h-[2.8rem] items-center text-base leading-[2.4rem] text-neutral-navy-100">
              {myAsset.assetName}
            </h3>
          </div>
        </div>
      </button>
    </li>
  )
}
