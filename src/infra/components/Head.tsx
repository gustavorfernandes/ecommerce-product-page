import Head from 'next/head'

export function PageTitle({ children }: any) {
  return (
    <Head>
      <title>
        {children}
      </title>
    </Head>
  )
}

export function MetaDescription ({ children }: any) {
  return (
    <Head>
      {children}
    </Head>
  )
}