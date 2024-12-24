import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import fram1 from "../../../public/Frame 27.png"
import fram2 from "../../../public/Frame 28.png"

const Cart = () => {
    return (
        <div>
        <div className='mx-auto px-[10%]'>
            <div className='text-gray-400 flex gap-4 my-6' >
                <p>Home </p>
                <p className='mt-1'>  <FaChevronRight /></p>
                <p>Cart</p></div>
            <div><h1 className='font-extrabold text-3xl my-6'>YOUR CART</h1></div>
            <div className='flex flex-wrap gap-8   '>
                <div className='mx-auto '> <Image src={fram1} alt='fram1' width={650} height={500} className=' '
                ></Image></div>
                <div  className=' mx-auto w-[650px] h-[500px] md:w-[400px] md:h-[300px]'> <Image src={fram2} alt='fram1' width={400} height={300} className=' '></Image></div>


            </div>


        </div>
        <div className="w-[80%] bg-gray-950  border-0 rounded-3xl my-10 py-10 flex flex-wrap ml-[10%] justify-between ">
        <h1 className="text-white text-2xl sm:text-4xl font-extrabold sm:w-[50%] pl-[6%] pt-4">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <div className=" pr-[6%]">
          <button className="text-gray-500 border-0 rounded-full w-[90%] sm:w-[80%] h-[48px] bg-white ml-5 sm:ml-20 my-4 sm:my-2">Enter Your Email Adress</button>
          <button className="text-gray-500 border-0 rounded-full w-[90%] sm:w-[80%] h-[48px] bg-white ml-5 sm:ml-20 my-4 sm:my-2">Subscribe To Newsletter</button>
        </div>

      </div>
        </div>
    )
}

export default Cart
