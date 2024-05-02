import Layout from '@/components/common/Layout'
import AssetDetail from '@/components/assetDetail/AssetDetail'
import Drawer from '@/components/common/Drawer'
import MyAsset from '@/components/myAsset/MyAsset'

export default function MyAssetsPage() {
  return (
    <Layout>
      <div className="flex">
        <section className="min-h-[calc(100vh-12.3rem)] px-[2.3rem] pt-8">
          <MyAsset />
        </section>
        <section className="sticky top-[7.2rem] h-[calc(100vh-7.2rem)] ">
          <Drawer>
            <AssetDetail />
          </Drawer>
        </section>
      </div>
    </Layout>
  )
}
