import { getAllCategories } from '@/api/service/category'
import AssetDetail from '@/components/assetDetail/AssetDetail'
import CategoryAssetContainer from '@/components/category/CategoryAssetContainer'
import CategoryAssetList from '@/components/category/CategoryAssetList'
import Drawer from '@/components/common/Drawer'
import Layout from '@/components/common/Layout'

export default async function CategoriyPage() {
  const data = await getAllCategories()
  const categoryList = data.map((item) => item.categoryName)

  return (
    <Layout>
      <div className="flex">
        <div className="h-full w-full">
          <CategoryAssetContainer categoryList={categoryList} />
        </div>
        <Drawer>
          <AssetDetail />
        </Drawer>
      </div>
    </Layout>
  )
}
