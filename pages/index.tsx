import type { NextPage } from 'next'
import Slider from '../src/components/Slider'
import { PageTitle } from '../src/infra/components/Head'
import Description from '../src/patterns/Description'
import Header from '../src/patterns/Header'


const Home: NextPage = () => {
  return (
    <>
      <PageTitle >
        Ecommerce product page
      </PageTitle>

      <Header />
      <Slider />
      <Description />
    </>
  )
}

export default Home
