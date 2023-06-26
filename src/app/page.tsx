import AssetDetail from '@/components/assetDetail/AssetDetail'
import IndividualAsset from '@/components/assets/IndividualAsset'
import Drawer from '@/components/common/Drawer'
import Footer from '@/components/common/Footer'
import Layout from '@/components/common/Layout'

export default function HomePage() {
  return (
    <Layout>
      <div className="flex">
        <div className="h-[100%] w-full">
          <section className="min-h-[calc(100vh-12.3rem)] px-[2.3rem] pt-8">
            <IndividualAsset />
          </section>
          <Footer />
        </div>
        <section className="sticky top-[7.2rem] h-[calc(100vh-7.2rem)] ">
          <Drawer>
            <AssetDetail />
          </Drawer>
        </section>
      </div>
    </Layout>
  )
}
