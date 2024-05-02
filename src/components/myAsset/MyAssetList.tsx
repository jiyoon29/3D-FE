import AssetItem from '../assets/AssetItem'
import { Asset } from '@/api/interface/asset'
import MyAssetItem from './MyAssetItem'

interface MyAssetListProps {
  myAssets: Asset[] | undefined
}

export default function MyAssetList({ myAssets }: MyAssetListProps) {
  if (!myAssets) return null

  return (
    <ul className="mb-[6.4rem] flex flex-wrap gap-2">
      {myAssets.map((myAsset) => (
        <MyAssetItem key={myAsset.assetId} myAsset={myAsset} />
        // <MyAssetItem key={myAsset.assetId} myAsset={myAsset} selectedAsset="" setSelectedAsset={} />
      ))}
    </ul>
  )
}
