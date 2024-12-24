import React from 'react'
import { FaStar } from "react-icons/fa6";
import Image from 'next/image';

interface ProductCard {
    title : string,
    id : number,
    price : string,
    url : string, 
    oldPrice?: string
}
const detailCard:ProductCard [] = [
    {

    title : "Polo with Contrast Trims",
    id : 1,
    price : "$212",
    url : "/Frame 32 (1).png", 
    oldPrice: "$242"

},
{

    title : "Gradient Graphic T-shirt",
    id : 2,
    price : "$145",
    url : "/Frame 33 (1).png", 
   

},
{

    title : "Polo with Tipping Details",
    id : 3,
    price : "$120",
    url : "/Frame 34 (1).png", 
  

},
{

    title : "Black Striped T-shirt",
    id : 4,
    price : "$212",
    url : "/Frame 38 (3).png", 
    oldPrice: "$160"

},
]

// const rating = [<FaStar className='text-yellow-500'/> ,<FaStar className='text-yellow-500'/> ,<FaStar className='text-yellow-500'/>, <FaStar className='text-yellow-500' /> ,<FaStar className='text-yellow-500' /> ]


const ProductCard = () => {
  return (
    <div>
        
        <div className='flex flex-wrap px-20 justify-around '>
            {
                detailCard.map((data , index)=>{
                    return (
                        <div className='border-0' key={index}>
                            <Image src={data.url} alt='data.title'width={280} height={320}
                            ></Image>
                            <div>
                                <p className='text-xl font-bold my-2'>{data.title}</p>
                                {/* <p className='flex gap-1 text-yellow-500 my-2'>{rating}</p> */}
                                  <div className='flex text-yellow-400 my-4 text-2xl'>
                                          <FaStar /> <span><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
                                        </div>
                                <p className='text-2xl font-bold my-2'>{data.price} <span className='text-gray-300 line-through'>{data.oldPrice}</span></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
       


    </div>
  )
}

export default ProductCard
