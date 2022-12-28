
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import { Navbar, Sidebar } from '../components'

import '../styles/globals.css'

import { GoogleOAuthProvider } from '@react-oauth/google'


const App = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setisSSR] = useState(true)

  useEffect(() => {
    setisSSR(false)
  }, [])
  


  if(isSSR) return null
  
  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <div className='flex flex-col bg-black'>
        <Navbar />
        <div className='flex m-auto gap-10 md:gap-20 lg:pl-[100px] lg:pr-[100px]'>
          <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
            <Sidebar />
          </div>
          <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
            <Component {...pageProps} />  
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App
