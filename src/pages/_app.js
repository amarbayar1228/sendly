import Header from '@/components/header'
import ScrollToTop from '@/components/scrollToTop'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div className='scrollbar'>
  <Header />
  <ScrollToTop />
  <div className='h-[138px]'></div>
  <Component {...pageProps} />
  </div>
}
