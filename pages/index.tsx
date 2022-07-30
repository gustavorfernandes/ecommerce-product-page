import type { NextPage } from 'next'
import { PageTitle } from '../src/infra/components/Head'
import ProductScreen from '../src/screens/ProductScreen'


const Home: NextPage = () => {
  return (
    <>
      <PageTitle >
        Ecommerce product page
      </PageTitle>

      <ProductScreen />
    </>
  )
}

export default Home
