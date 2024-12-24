
import CasualProductCard from '@/components/casualcard'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";

import React from 'react'


// const Casual = () => {
//     return (
//         <div>
//             <div className='flex flex-wrap mx-auto pl-[10%] my-10'>
//                 <div className='w-[98%] md:w-[20%] border-2 border-gray-300 rounded-xl  p-4'>
//                     <table className='' >
//                         <thead>
//                             <tr className=' py-4'>
//                                 <td className='font-bold text-xl my-2 w-10 h-20'>Filter</td>
//                                 <td className='font-bold text-xl my-3  w-10 h-20'><GiSettingsKnobs /></td>

//                             </tr>
//                         </thead>
                       
//                         <hr /> 
//                         <tbody>
//                             <tr >
//                                 <td className='w-[50%]  h-10'>T-Shirt</td>
//                                 <td className='w-[50%] h-10 '><FaChevronRight /></td>
//                             </tr>
//                             <tr>
//                                 <td className='w-[50%] h-10   my-2'>T-Shirt</td>
//                                 <td className='w-[50%]  h-10 my-2'><FaChevronRight /></td>
//                             </tr>

//                             <tr>
//                                 <td className='w-[50%] h-10 my-2'>T-Shirt</td>
//                                 <td className='w-[50%] h-10 my-2'><FaChevronRight /></td>
//                             </tr>
//                             <tr>
//                                 <td className='w-[50%] h-10 my-2'>T-Shirt</td>
//                                 <td className='w-[50%] h-10 my-2'><FaChevronRight /></td>
//                             </tr>


                      
                     
//                         <hr />
                     
                      
//                             <tr>
//                                 <td className='font-bold text-xl my-2 w-[50%] h-20 '>Price</td>
//                                 <td className=' my-2 w-[50%] h-10 '><FaChevronUp /></td>

//                             </tr>
                    
                    
                     
//                             <tr>
//                                 <td className=' my-2 font-bold w-[50%] h-10'>$50</td>
//                                 <td className=' my-2 font-bold w-[50%] h-10'>$200</td>

//                             </tr>
                    
//                         <hr />
                      
//                             <tr><td className='font-bold text-xl my-4 w-[50%] h-20'>Colors</td></tr>
                            

                     
                   
//                             <tr className='w-[100%]  my-2  h-10'>

//                                 <td className='w-[20%]  my-2'><button className='bg-green-600 border-0 rounded-full w-[30px] h-[30px]'></button></td>
//                                 <td className=' my-2 '><button className='bg-red-600 border-0 rounded-full w-[30px] h-[30px] -ml-[80px]'></button></td>
//                                 <td className=' my-2'><button className='bg-orange-600 border-0 rounded-full w-[30px] h-[30px] -ml-[150px]'></button></td>
//                                 <td className=' my-2'><button className='bg-yellow-600 border-0 rounded-full w-[30px] h-[30px] -ml-[110px]'></button></td>
//                                 <td className=' my-2'><button className='bg-blue-300 border-0 rounded-full w-[30px] h-[30px] -ml-[70px]'></button></td>
//                             </tr>
//                             <tr className='w-[100%]  my-2 h-10'>

//                                 <td className='w-[20%]  my-2'><button className='bg-blue-800 border-0 rounded-full w-[30px] h-[30px]'></button></td>
//                                 <td className=' my-2 '><button className='bg-purple-600 border-0 rounded-full w-[30px] h-[30px] -ml-[80px]'></button></td>
//                                 <td className=' my-2'><button className='bg-pink-600 border-0 rounded-full w-[30px] h-[30px] -ml-[150px]'></button></td>
//                                 <td className=' my-2'><button className='bg-black  border-0 rounded-full w-[30px] h-[30px] -ml-[110px]'></button></td>
//                                 <td className=' my-2'><button className='bg-yellow-100 border-0 rounded-full w-[30px] h-[30px] -ml-[70px]'></button></td>
//                             </tr>
                    
//                         <hr />
//                      <tr className='my-4 w-[50%] h-20'><td className='font-bold text-xl'>Size</td>
//                             <td className='font-bold text-xl w-[50%] h-10'><FaChevronUp /></td></tr>
                    
//                             <tr>
//                                 <td><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>xx-small</button></td>
//                                 <td><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>x-small</button></td>
//                             </tr>
//                             <tr>
//                                 <td><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]   my-4'>Small</button></td>
//                                 <td><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>Medium</button></td>
//                             </tr>
//                             <tr>
//                                 <td><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>Large</button></td>
//                                 <td><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>x-Large</button></td>
//                             </tr>
//                             <tr>
//                                 <td><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>xx-Large</button></td>
//                                 <td><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>3x-Large</button></td>
//                             </tr>
//                             <tr>

//                                 <td><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>4x-Large</button></td>
//                             </tr>

//                         <hr />

//                      <tr className='my-2'><td className='font-bold text-xl  my-2 w-[50%] h-20'>Dress Style</td>
//                             <td className='font-bold text-xl  my-2 w-[50%] h-10'><FaChevronUp /></td></tr>
                       
//                             <tr className='my-4 w-[50%] h-10'>
//                                 <td className=' my-4'>Casual</td>
//                                 <td className=' my-4'><FaChevronRight /></td>
//                             </tr>
//                             <tr className='my-4 w-[50%] h-10'>
//                                 <td className=' my-4'>Formal</td>
//                                 <td className=' my-4'><FaChevronRight /></td>
//                             </tr>
//                             <tr className='my-4 w-[50%] h-10'>
//                                 <td className=' my-4'>Party</td>
//                                 <td className=' my-4'><FaChevronRight /></td>
//                             </tr>
//                             <tr className='my-4 w-[50%] h-10'>
//                                 <td className=' my-4'>Gym</td>
//                                 <td className=' my-4'><FaChevronRight /></td>
//                             </tr>
                          
//                             <tr className='my-4 w-[50%] h-10'>
//                                 <td><button className='bg-gray-950 text-white border-0 rounded-3xl w-[120px] h-[48px] my-2 '>Apply Filter</button></td>
//                             </tr>

//                         </tbody>
//                     </table>
//                 </div>
//                 <div className=' w-[80%] '>
//                     < CasualProductCard />
//                     <div className='flex justify-between sm:pl-10 sm:pr-48 my-8'>
//                         <button className=' border-2  text-gray-400 rounded-2xl w-[120px] h-[48px]'>Preview</button>
//                         <button className='border-2 text-gray-400 rounded-2xl w-[120px] h-[48px]'>Next</button>
//                     </div>
//                 </div>

//                 <hr className='text-gray-300' />


//             </div>
//             <div className="w-[80%] bg-gray-950  border-0 rounded-3xl my-10 py-10 flex flex-wrap ml-[10%] justify-between ">
//                 <h1 className="text-white text-2xl sm:text-4xl font-extrabold sm:w-[50%] pl-[6%] pt-4">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
//                 <div className=" pr-[6%]">
//                     <button className="text-gray-500 border-0 rounded-full w-[90%] sm:w-[80%] h-[48px] bg-white ml-5 sm:ml-20 my-4 sm:my-2">Enter Your Email Adress</button>
//                     <button className="text-gray-500 border-0 rounded-full w-[90%] sm:w-[80%] h-[48px] bg-white ml-5 sm:ml-20 my-4 sm:my-2">Subscribe To Newsletter</button>
//                 </div>

//             </div>
//         </div>

//     )
// }

// export default Casual


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Casual = () => {
    return (
        <div>

<div className='flex flex-wrap mx-auto pl-[10%] my-10'>
                 <div className='w-[98%] md:w-[20%] border-2 border-gray-300 rounded-xl  p-4'>
                   
                    
                             <div className=' py-4 flex gap-40'>
                                 <p className='font-bold text-xl my-2 w-10 h-2'>Filter</p>
                                <p className='font-bold text-xl my-3  w-10 h-2'><GiSettingsKnobs /></p>

                            </div>
                    
                       
                         <hr /> 
                    
                             <div className='flex gap-40 my-2' >
                                 <p className='w-[50%]  h-10'>T-Shirt</p>
                                 <p className='w-[50%] h-10 '><FaChevronRight /></p>
                             </div>
                             <div className='flex gap-40'>
                                 <p className='w-[50%] h-10   my-2'>T-Shirt</p>
                                 <p className='w-[50%]  h-10 my-2'><FaChevronRight /></p>
                            </div>

                             <div className='flex gap-40'>
                                 <p className='w-[50%] h-10 my-2'>T-Shirt</p>
                                 <p className='w-[50%] h-10 my-2'><FaChevronRight /></p>
                             </div>
                             <div className='flex gap-40'>
                                <td className='w-[50%] h-10 my-2'>T-Shirt</td>
                                 <td className='w-[50%] h-10 my-2'><FaChevronRight /></td>
                             </div>


                      
                     
                         <hr />
                     
                      
                             <div className='flex gap-40'>
                                 <p className='font-bold text-xl my-2 w-[50%] h-10  '>Price</p>
                                 <p className=' my-2 w-[50%] h-10 '><FaChevronUp /></p>

                             </div>
                    
                    
                     
                            <div className='flex gap-20'>
                                 <p className=' my-2 font-bold w-[50%] h-10'>$50</p>
                                 <p className=' my-2 font-bold w-[50%] h-10'>$200</p>

                            </div>
                                           <hr />                    
                             <div><p className='font-bold text-xl my-4 w-[50%] h-10'>Colors</p></div>
                            

                     
                   
                            <div className='w-[100%]  my-2  h-10 flex gap-2'>

                                <p className=' my-2'><button className='bg-green-600 border-0 rounded-full w-[30px] h-[30px]'></button></p>
                                <p className=' my-2 '><button className='bg-red-600 border-0 rounded-full w-[30px] h-[30px] '></button></p>
                                <p className=' my-2'><button className='bg-orange-600 border-0 rounded-full w-[30px] h-[30px] '></button></p>
                                <p className=' my-2'><button className='bg-yellow-600 border-0 rounded-full w-[30px] h-[30px] '></button></p>
                                <p className=' my-2'><button className='bg-blue-300 border-0 rounded-full w-[30px] h-[30px] '></button></p>
                             </div>
                            <div className='w-[100%]  my-2 h-10 flex gap-2'>

                                <p className='my-2'><button className='bg-blue-800 border-0 rounded-full w-[30px] h-[30px]'></button></p>
                                <p className=' my-2 '><button className='bg-purple-600 border-0 rounded-full w-[30px] h-[30px] '></button></p>
                                <p className=' my-2'><button className='bg-pink-600 border-0 rounded-full w-[30px] h-[30px] '></button></p>
                                <p className=' my-2'><button className='bg-black  border-0 rounded-full w-[30px] h-[30px] '></button></p>
                                <p className=' my-2'><button className='bg-yellow-100 border-0 rounded-full w-[30px] h-[30px] '></button></p>
                             </div  >               
                        <hr />
                     <div className='my-4 w-[50%] h-5 flex gap-40'><p className='font-bold text-xl '>Size</p>
                            <p className='font-bold text-xl w-[50%] h-10'><FaChevronUp /></p></div>
                 
                            <div className='flex gap-2'>
                                <p><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>xx-small</button></p>
                                <p><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>x-small</button></p>
                            </div>
                            <div className='flex gap-2'>
                                <p><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]   my-4'>Small</button></p>
                                <p><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>Medium</button></p>
                            </div>
                            <div className='flex gap-2'>
                                <p><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>Large</button></p>
                                <p><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>x-Large</button></p>
                            </div>
                            <div className='flex gap-2'>
                               <p><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>xx-Large</button></p>
                                <p><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>3x-Large</button></p>
                            </div>
                             <div>

                                 <p><button className='bg-gray-200 border-0 rounded-3xl w-[120px] h-[48px]  my-4'>4x-Large</button></p>
                             </div>

                         <hr />

                      <div className='my-2 flex gap-20'>
                        <p className='font-bold text-xl  my-2  h-5 '>Dress Style</p>
                            <p className='font-bold text-xl  my-2  h-5'><FaChevronUp /></p></div>
                       
                             <div className='my-4 w-[50%] h-10 flex gap-40'>
                                 <p className=' my-4'>Casual</p>
                                 <p className=' my-4'><FaChevronRight /></p>
                             </div>
                             <div className='my-4 w-[50%] h-10 flex gap-40'>
                                <p className=' my-4'>Formal</p>
                                <p className=' my-4'><FaChevronRight /></p>
                             </div>
                             <div className='my-4 w-[50%] h-10  flex gap-40'>
                                 <p className=' my-4'>Party</p>
                                 <p className=' my-4'><FaChevronRight /></p>
                            </div>
                             <div className='my-4 w-[50%] h-10  flex gap-40'>
                                 <p className=' my-4'>Gym</p>
                                 <p className=' my-4'><FaChevronRight /></p>
                            </div>
                          
                             <div className='my-4 w-[50%] h-10'>
                                 <p><button className='bg-gray-950 text-white border-0 rounded-3xl w-[220px] h-[48px] my-2 '>Apply Filter</button></p>
                             </div>

                       
               
                 </div>
                 <div className=' w-[80%] '>
                    < CasualProductCard />
                     <div className='flex justify-between sm:pl-10 sm:pr-48 my-8'>
                        <button className=' border-2  text-gray-400 rounded-2xl w-[120px] h-[48px]'>Preview</button>
                         <button className='border-2 text-gray-400 rounded-2xl w-[120px] h-[48px]'>Next</button>
                    </div>
                </div>

                <hr className='text-gray-300' />

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

export default Casual




