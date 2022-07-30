import '../styles/globals.css'
import '../styles/slider.css'
import type { AppProps } from 'next/app'
import { store } from '../src/store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
