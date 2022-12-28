import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { BsPlay } from 'react-icons/bs';

import { Video } from './../types';




interface IProps {
  post: Video;
  isShowingOnHome?: boolean;
}

const VideoCard: NextPage<IProps> = ({ post: { caption, postedBy, video, _id, likes }, isShowingOnHome }) => {
  const [isHover, setIsHover] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [isVideoMuted, setIsVideoMuted] = useState(false)

  console.log(video)

  const videoRef = useRef<HTMLVideoElement>(null)

  const onVideoPress = () => {
    if(playing) {
        videoRef?.current?.pause()
        setPlaying(false)
    } else {
        videoRef?.current?.play()
        setPlaying(true)
    }
  }

  return (
    <div className='flex flex-col border-b-[10px]border-gray-600 pb-6'>
      <div>
        <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded '>
          <div className='md:w-16 md:h-16 w-10 h-10'>
            <Link href={`/profile/${postedBy?._id}`}>
              <>
                <Image
                  width={62}
                  height={62}
                  className=' rounded-full'
                  src={postedBy?.image}
                  alt='user-profile'
                  layout='responsive'
                />
              </>
            </Link>
          </div>
          <div>
            <Link href={`/profile/${postedBy?._id}`}>
              <div className='flex items-center gap-2'>
                <p className='flex gap-2 items-center md:text-md font-bold text-white'>
                  {postedBy.userName}{' '}
                  <GoVerified className='text-blue-400 text-md' />
                </p>
                <p className='capitalize font-medium text-xs text-gray-300 hidden md:block'>
                  {postedBy.userName}
                </p>
              </div>
            </Link>
            <Link href={`/detail/${_id}`}>
              <p className='text-white mt-2 font-normal '>{caption}</p>
            </Link>
          </div>
        </div>
      </div>
      
      <div className='lg:ml-20 flex gap-4'>
        <div 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className='relative lg:w-[288px] h-[384px] lg:h-[512px] w-[216px] rounded-3xl'
        >
            <Link href='/'>
                <video
                    loop
                    ref={videoRef}
                    className='rounded-3xl w-full h-full cursor-pointer bg-black'
                    src={video.asset.url}
                >
                </video>
            </Link>

            {isHover && (
                <div
                  className='absolute w-[100px] md:w-[500px] lg:w-[1400px] cursor-pointer top-1/2 left-1/2 mx-auto -ml-3' 
                >
                    {playing ? (
                        <button onClick={onVideoPress}>
                            <BsFillPauseFill 
                                className='text-white text-2xl lg:text-4xl'
                            />
                        </button>
                    ) : (
                        <button onClick={onVideoPress}>
                            <BsFillPlayFill
                                className='text-white text-2xl lg:text-4xl'
                            />
                        </button>
                    )}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;