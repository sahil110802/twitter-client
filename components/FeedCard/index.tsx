import Image from 'next/image';
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';

const FeedCard: React.FC = () => {
  return (
    <div className='border-t border-gray-600  p-4 hover:bg-slate-900 cursor-pointer transition-all'>
      <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-1'>
          <Image className='rounded-full' alt='user-avatar' width={100} height={100} src="https://avatars.githubusercontent.com/u/97180986?v=4"/>
        </div>
        <div className='col-span-11'>
          <h5>Sahil Sahu</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Facere sint dolorem, ducimus provident hic mollitia, assumenda 
            reprehenderit dolores, animi amet saepe suscipit id facilis dolor 
            culpa similique modi impedit. Laboriosam?</p>
            <div className='text-3xl h-fit flex justify-between mt-5  items-center p-2 w-[90%]'>
              <div>
                <BiMessageRounded/>
              </div>
              <div>
                <FaRetweet/>
              </div>
              <div>
                <AiOutlineHeart/>
              </div>
              <div>
                <BiUpload/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeedCard;