'use client'
import { useState } from 'react'
import PaginationButton from '../common/PaginationButton'
import MyAssetList from './MyAssetList'
import Image from 'next/image'
import DropDown from '../common/DropDown'
import { useGetMyAssets } from '@/hooks/useGetMyAssets'

export default function MyAsset() {
  //드롭다운 아이템
  const [selectedItem, setSelectedItem] = useState('최근순')
  // 선택한 에셋에 따른 내에셋 갯수 카운트
  const [selectedAsset, setSelectedAsset] = useState({ isClicked: false, count: 1 })
  //페이지네이션
  const [activePage, setActivePage] = useState(0)
  //에셋사이즈
  const [getSize, setGetSize] = useState(0)
  const { myAssets, isLoading } = useGetMyAssets({ page: activePage, size: getSize })

  const handleClick = () => {
    setSelectedAsset((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }))
  }
  return (
    <section className="my-8 text-[1.4rem] text-neutral-navy-100">
      <div className="flex w-full justify-between">
        <div className="mb-12 flex">
          <h1 className="w-[9.1rem] text-[2.4rem]">내 에셋&nbsp;</h1>
          {selectedAsset ? (
            <p className="mt-2 text-[1.8rem]">(클릭전{myAssets?.data.data.totalElement})</p>
          ) : (
            <p className="text-[1.8rem]">(/클릭후{myAssets?.data.data.totalElement})</p>
          )}
        </div>
        <div className="flex">
          <div className="mx-1 ">
            <DropDown
              list={[
                '최근 순',
                '인기 순',
                '다운로드 순',
                '할인 순',
                '평점 순',
                '낮은가격 순',
                '높은가격 순',
              ]}
              selectedItem={selectedItem}
              setSelectedItem={(newItem: string) => setSelectedItem(newItem)}
            />
          </div>
          <div className="mx-1 flex h-[3rem] w-[25.3rem] rounded-sm border border-transparent-navy-30 bg-bg-2 px-[1.2rem]">
            <Image src="/icons/search.svg" alt="검색" width={24} height={24} />
            <input type="text" className="ml-[0.8rem] w-full bg-bg-2 py-2 text-neutral-white-50" />
          </div>
        </div>
      </div>
      {/* <MyAssetList /> */}
      <MyAssetList myAssets={myAssets?.data?.assetList} />
      {/* 페이지네이션 추가 */}
      <PaginationButton
        activePage={activePage}
        setActivePage={setActivePage}
        pages={myAssets?.data?.totalPage}
      />
    </section>
  )
}
