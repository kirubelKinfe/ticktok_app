import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'

import Logo from '../utils/tiktik-logo.png'

import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { createOrGetUser } from '../utils'
import useAuthStore from '../store/authStore'

const Navbar = () => {
  const { userProfile, addUser, removeUser }: { userProfile: any, addUser: any, removeUser: any} = useAuthStore()

  return (
    <div className='w-full pl-[150px] pr-[150px] flex justify-between items-center border-b-2 border-gray-500 py-5'>
      <Link href='/'>
        <div className='w-[150px] md:w-[150px]'>
          <Image 
            className='cursor-pointer'
            src={Logo}
            alt="TikTik"
            layout='responsive'
          />
        </div>
      </Link>
      <div className='text-white'>SEARCH</div>

      <div>
        {userProfile ? (
          <div className='flex justify-center items-center gap-5 md:gap-10'>
            <Link href='/upload'>
              <button className='border-2 px-2 py-2 md:px-4 text-md font-semibold flex items-center justify-center gap-2 text-white border-gray-200'>
                <IoMdAdd className='text-xl' /> 
                {` `}
                <span className='hidden md:block'>Upload</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href='/' >
                <>
                  <Image
                    width={40}
                    height={40}
                    className='cursor-pointer rounded-full'
                    src={userProfile.image}
                    alt='profile photo'
                  />
                </>
              </Link>
            )}
            <button 
              type='button'
              className='px-2 py-2 bg-white rounded-full'
              onClick={() => {
                googleLogout()
                removeUser()
              }}
            >
              <AiOutlineLogout color='red' fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin 
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log('Error')}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar