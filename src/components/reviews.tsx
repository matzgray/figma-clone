import React from 'react'
import { FaStar } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";

const Reviews = () => {
  return (
    <div className='border-2 border-gray-200 rounded-3xl w-[90%] md:w-[49%]  px-[5%] mx-auto  m:p-8 my-4'>
        <div className='flex text-yellow-400 my-4 text-xl'>
          <FaStar /> <span><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
        </div>
       <div className='flex gap-2 my-2'><span className='text-xl font-bold'>Samantha D.</span><span className=' '><IoCheckmarkCircle className='bg-green-800 text-white rounded-full mt-1' /></span></div> 
        <p className='my-2'>I absolutely love this tshirt  The design is unique and the fabric feels so comfortable. As a fellow designer I appreciate the attention to detail. Its become my favorite goto shirt.</p>
      <p className='text-gray-500 my-2'>Posted on August 14 2023</p>
    </div>
  )
}

export default Reviews
