import '../styles/globals.css'
import '../styles/slider.css'
import type { AppProps } from 'next/app'
import { CartProvider } from '../src/contexts/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
