import AssetDetail from '@/components/assetDetail/AssetDetail'
import CategoryByAsset from '@/components/assets/CategoryByAsset'
import Drawer from '@/components/common/Drawer'
import Layout from '@/components/common/Layout'

export default function SubCategoriyPage() {
  return (
    <Layout>
      <div className="flex">
        <div className="h-[100%] w-full">
          <CategoryByAsset />
        </div>
        <Drawer>
          <AssetDetail />
        </Drawer>
      </div>
    </Layout>
  )
}
