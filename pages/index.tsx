import type { NextPage } from 'next'
import { PageTitle } from '../src/infra/components/Head'
import Header from '../src/patterns/Header'
import Product from '../src/patterns/Product'


const Home: NextPage = () => {
  return (
    <>
      <PageTitle >
        Ecommerce product page
      </PageTitle>

      <Header />
      <Product />
    </>
  )
}

export default Home
