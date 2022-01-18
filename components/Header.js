import React from 'react'

function Header() {
    return (
        <div className='md:flex bg-gray-800 px-5 py-2 sticky'>
            <div className='flex md:mx-0 mx-auto w-max'>
                <img src="./logo123.png" className='h-14'/>
                <h1 className='text-3xl font-bold text-white my-auto ml-3'>Bhavik's Gallery</h1>
            </div>
            <div className='flex bg-gray-900 rounded-full h-10 ml-auto my-auto mt-2 md:mr-24'>
                <input className='bg-gray-900 rounded-full h-full text-white px-3 font-semibold outline-none flex-1'/>
                <div className="h-full flex place place-content-center px-3 rounded-r-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header
