import type { NextPage } from 'next'
import { PageTitle } from '../src/infra/components/Head'
import ProductPage from '../src/screens/ProductPage'


const Home: NextPage = () => {
  return (
    <>
      <PageTitle >
        Ecommerce product page
      </PageTitle>

      <ProductPage />
    </>
  )
}

export default Home
