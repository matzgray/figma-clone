import React from 'react'
import Image from 'next/image'
import product1 from "../../../public/image 1.png"

import product3 from "../../../public/image 5.png"
import product4 from "../../../public/image 6.png"
import { GiSettingsKnobs } from "react-icons/gi";


import { FaStar } from "react-icons/fa6";
import Reviews from '@/components/reviews'
import ProductCard from '@/components/product'

const ProductDetail = () => {
  return (
    <div>
      <div className='flex flex-wrap px-20 gap-6 justify-around my-10'>
        <div className='flex flex-row md:flex-col gap-2 order-2 md:order1 -ml-10 md:ml-0'>
          <Image src={product1} alt='product' width={150} height={150}
            className='border-2 rounded-3xl  w-[111px] h-[106px]  md:w-[152px] md:h-[167px]'></Image>
          <Image src={product3} alt='product' width={150} height={150}
            className='border-2 rounded-3xl w-[111px] h-[106px]   md:w-[152px] md:h-[167px] '></Image>
          <Image src={product4} alt='product' width={150} height={150}
            className='border-2 rounded-3xl w-[111px] h-[106px]   md:w-[152px] md:h-[167px]'></Image>
        </div>
        <div>
          <Image src={product1} alt='product width={600} height={600}'
            className='border-2 rounded-3xl w-[358px] h-[290px] md:w-[444px] md:h-[530px]  md:order-2'></Image>
        </div>
        <div className='w-[98%]  md:w-[50%]   order-3 -ml-6 md:ml-0'>
          <h1 className='font-[Integral CF] foun-bold text-[24px] md:text-[40px] my-4'>One Life Graphic T-shirt</h1>
          <div className='flex text-yellow-400 my-4'><FaStar /> <span><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span></div>
          <p className='text-[satoshi] text-24 font-bold my-4'>$260 <span className='text-gray-500'> $300</span></p>
          <p className='my-4'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          <hr />
          <p className='text-gray-600 my-4'>Select Colors</p>
          <div className='flex gap-4 my-4'>
            <div className='bg-[#4F4631] w-10 h-10 rounded-full'></div>
            <div className='bg-[#314F4A] w-10 h-10 rounded-full'></div>
            <div className='bg-[#31344F] w-10 h-10 rounded-full'></div>
          </div>
          <hr />
          <p className='text-gray-600 my-4'>Choose Size</p>
          <div className='flex gap-2 md:gap-6 '>
            <button className='bg-gray-200 text-gray-500 hover:bg-gray-950 hover:text-white text rounded-xl md:rounded-3xl w-[74px] h-[39px] p-2  md:w-20  text-sm md:text-base '>Small</button>
            <button className='bg-gray-200 text-gray-500 hover:bg-gray-950 hover:text-white text rounded-xl md:rounded-3xl w-[76px] h-[39px] p-2 md:w-24 text-sm md:text-base'>Medium</button>
            <button className='bg-gray-200 text-gray-500 hover:bg-gray-950 hover:text-white text rounded-xl md:rounded-3xl  w-[76px] h-[39px]  p-2 md:w-24 text-sm md:text-base'>Large</button>
            <button className='bg-gray-200 text-gray-500 hover:bg-gray-950 hover:text-white text rounded-xl md:rounded-3xl  w-[99px] h-[39px] p-2 md:w-24 text-xs md:text-base'>X-Large</button>
          </div>
        </div>
      </div>


      <div className='flex px-20 text-xl justify-evenly mt-16 mb-6'>
        <p className='text-gray-500 hover:text-gray-950'>Product Details</p>
        <p className='text-gray-500 hover:text-gray-950'>Rating & Reviews</p>
        <p className='text-gray-500 hover:text-gray-950'>FAQs</p>

      </div>
      <hr />
      <div className='flex justify-between -ml-14 md:mx-auto px-32 my-10'>
        <div><h1 className='text-[18px] md:text-2xl font-bold '>All Reviews  <span className='text-gray-500'>451</span></h1></div>
        <div className='flex gap-4 '>
          <div className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full bg-gray-300 hover:bg-gray-950'><GiSettingsKnobs className='text-black font-bold text-xl md:text-2xl m-auto mt-2 hover:text-white' /></div>
          <button className='w-[120px] md:h-[48px] rounded-3xl bg-gray-200 hover:bg-gray-950 hover:text-white hidden md:flex pl-8 pt-3'>Latest </button>
          <button className='w-[120px] h-[44px] md:w-[166px] md:h-[48px] bg-gray-200 hover:bg-gray-950 hover:text-white rounded-3xl'>Write a Review</button>

        </div>
      </div>
      <div className='flex flex-wrap  mx-20 justify-between '>   <Reviews />    <Reviews />    <Reviews />    <Reviews />    <Reviews />    <Reviews /></div>
      <center><button className='border-2 border-gray-200 rounded-full h-[52px] w-[230px]  p-4 my-6'>Load More Reviews</button></center>
      <center><h1 className='text-[48px] font-bold my-8'>YOU MIGHT ALSO LIKE</h1></center>

      <ProductCard />

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

export default ProductDetail
