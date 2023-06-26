import Layout from '@/components/common/Layout'
import Cart from '@/components/cart/Cart'

export default async function CartPage() {
  return (
    <Layout>
      <div className="relative flex min-h-[calc(100vh-7.2rem)] pt-[2.4rem] text-neutral-navy-100">
        <Cart />
      </div>
    </Layout>
  )
}
