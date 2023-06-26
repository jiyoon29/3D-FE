/**
 * 마이페이지
 */
import Layout from '@/components/common/Layout'
import AccountSettingPage from './setting/page'
import OrderHistoryPage from './orderHistory/page'

export default function MyPage() {
  return (
    <Layout>
      <AccountSettingPage />
      <OrderHistoryPage />
    </Layout>
  )
}
