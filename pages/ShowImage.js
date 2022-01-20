import React from 'react';
import { useRouter } from 'next/router'

function ShowImage() {
  const router = useRouter()
  const { image, userImageURL, user, tags } = router.query;

  return (
    <div>
        <div className='md:flex bg-gray-800 px-5 py-2 sticky left-0 top-0 z-50 shadow-lg shadow-blue-700'>
            <div className='flex md:mx-0 mx-auto w-max'>
                <img src="./logo123.png" className='h-14'/>
                <h1 className='text-3xl font-bold text-white my-auto ml-3'>Bhavik's Gallery</h1>
            </div>
            
        </div>
        <div className='bg-gray-900 min-h-screen text-white lg:flex'>
            <div className='p-10 lg:w-1/2'>
                <img className='rounded-md' src={image}/>
            </div>
            <div className='px-10 lg:w-1/2 lg:py-10 py-0'>
                <div className='flex border-b border-gray-700 pr-5 py-2'>
                    <img className='w-10 rounded-full my-auto' src={userImageURL}/>
                    <h1 className='my-auto mx-3 text-xl'>{user}</h1>
                    <div className='flex bg-gray-800 text-2xl px-4 py-2 w-max rounded-md mt-5 ml-auto
                    cursor-pointer hover:scale-105 active:scale-95 duration-200'>
                        download
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </div>
                </div>
                <div className="flex">
                    <h1 className='my-auto mr-5 text-lg'>Tags:</h1>
                    {tags.toString().split(",").map((datum) => (
                        <div className='px-4 py-1 rounded-md bg-gray-800 my-3 mx-1 text-lg'>{datum}</div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default ShowImage;
