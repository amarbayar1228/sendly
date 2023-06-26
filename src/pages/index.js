import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from 'antd'
import Banner from '@/components/banner'
import Brand from '@/components/brand'
import News from './news'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
        <Banner /> 
        <Brand />
        <News page="home"/>
      <div className='h-96 w-full bg-sky-100 mt-20'>haha</div>
      <div className='h-96 w-full bg-sky-100'>haha</div>
      <div className='h-96 w-full bg-sky-100'>haha</div>
    </main>
  )
}
