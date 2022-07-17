import { NextTwoOpenAccountsContainer } from '@/components/account/next-two-open-accounts.container'
import { CashierFallback } from '@/components/cashier/cashier.fallback'
import Layout from '@/components/Layout'

const Home = () => {
  return (
    <Layout>
      <NextTwoOpenAccountsContainer />
      <CashierFallback />
    </Layout>
  )
}

export default Home
