import React from 'react'
import Image from '../assets/About2.jpg'
import Image2 from '../assets/About1.jpg'
import Image3 from '../assets/About3.jpg'

const AboutUs = () => {
  return (
    <>
        <div className=' w-full min-h-screen flex flex-col px-3 mt-2 antialiased md:flex-row  md:justify-around'>
            <div className='flex flex-col md:w-1/2 gap-y-4 px-2 py-4'>
                <div className='font-bold'>
                    <p className='text-yellow-800 mt-2 text-lg underline  decoration-2 align-top'>How It started ?</p>
                </div>
                <div className='text-7xl font-bold'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
                </div>
                <div className='text-lg'>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae quos sunt earum quasi aliquam aut iure illum voluptas quam nemo soluta in aperiam adipisci blanditiis, ex vero distinctio suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia placeat, quo est harum dignissimos eveniet sequi aspernatur ad voluptates id esse deserunt, sapiente sunt repudiandae minus ab alias veritatis doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus numquam doloribus et in facere, voluptatum deserunt accusantium impedit molestias dolor pariatur porro assumenda ad rem nam corporis aliquam rerum magni?</p>
                </div>
            </div>
            <div>
                <div className=' w-96 h-96 rounded-md flex items-center justify-center'>
                    <img src={Image} alt="Img" className=' object-cover rounded-xl shadow-xl' />
                </div>
                <div className='grid grid-cols-2 '>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800'>
                        <h1 className='text-lg font-bold'>3.5 K</h1>
                        <p className='text-gray-600'>Happy Clients</p>
                    </div>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800' >
                        <h1 className='text-lg font-bold'>100k</h1>
                        <p className='text-gray-600'>Happy Clients</p>
                    </div>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800'>
                        <h1 className='text-lg font-bold'>50 +</h1>
                        <p className='text-gray-600'>Industries</p>
                    </div>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800'>
                        <h1 className='text-lg font-bold'>2+</h1>
                        <p className='text-gray-600'>Years</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=' w-full min-h-screen flex flex-col px-3 mt-2 antialiased md:flex-row  md:justify-around'>
        <div>
                <div className='font-bold'>
                    <p className='text-yellow-800 mt-2 text-lg underline  decoration-2 align-top'>Our Mission </p>
                </div>
                <div className=' w-96 h-96 rounded-md flex items-center justify-center'>
                    <img src={Image2} alt="Img" className=' object-cover rounded-xl shadow-xl' />
                </div>
                <div className='grid grid-cols-2 '>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800'>
                        <h1 className='text-lg font-bold'>3.5 K</h1>
                        <p className='text-gray-600'>Happy Clients</p>
                    </div>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800' >
                        <h1 className='text-lg font-bold'>100k</h1>
                        <p className='text-gray-600'>Happy Clients</p>
                    </div>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800'>
                        <h1 className='text-lg font-bold'>50 +</h1>
                        <p className='text-gray-600'>Industries</p>
                    </div>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800'>
                        <h1 className='text-lg font-bold'>2+</h1>
                        <p className='text-gray-600'>Years</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:w-1/2 gap-y-4 px-2 py-4'>
                <div className='text-7xl font-bold'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
                </div>
                <div className='text-lg'>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae quos sunt earum quasi aliquam aut iure illum voluptas quam nemo soluta in aperiam adipisci blanditiis, ex vero distinctio suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia placeat, quo est harum dignissimos eveniet sequi aspernatur ad voluptates id esse deserunt, sapiente sunt repudiandae minus ab alias veritatis doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus numquam doloribus et in facere, voluptatum deserunt accusantium impedit molestias dolor pariatur porro assumenda ad rem nam corporis aliquam rerum magni?</p>
                </div>
            </div>
            
        </div>

        <div className=' w-full min-h-screen flex flex-col px-3 mt-2 antialiased md:flex-row  md:justify-around'>
            <div className='flex flex-col md:w-1/2 gap-y-4 px-2 py-4'>
                <div className='font-bold'>
                    <p className='text-yellow-800 mt-2 text-lg underline  decoration-2 align-top'>Our Goals</p>
                </div>
                <div className='text-7xl font-bold'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
                </div>
                <div className='text-lg'>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae quos sunt earum quasi aliquam aut iure illum voluptas quam nemo soluta in aperiam adipisci blanditiis, ex vero distinctio suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia placeat, quo est harum dignissimos eveniet sequi aspernatur ad voluptates id esse deserunt, sapiente sunt repudiandae minus ab alias veritatis doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus numquam doloribus et in facere, voluptatum deserunt accusantium impedit molestias dolor pariatur porro assumenda ad rem nam corporis aliquam rerum magni?</p>
                </div>
            </div>
            <div>
                <div className=' w-96 h-96 rounded-md flex items-center justify-center'>
                    <img src={Image3} alt="Img" className=' object-cover rounded-xl shadow-xl' />
                </div>
                <div className='grid grid-cols-2 '>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800'>
                        <h1 className='text-lg font-bold'>3.5 K</h1>
                        <p className='text-gray-600'>Happy Clients</p>
                    </div>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800' >
                        <h1 className='text-lg font-bold'>100k</h1>
                        <p className='text-gray-600'>Happy Clients</p>
                    </div>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800'>
                        <h1 className='text-lg font-bold'>50 +</h1>
                        <p className='text-gray-600'>Industries</p>
                    </div>
                    <div className=' m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-yellow-800'>
                        <h1 className='text-lg font-bold'>2+</h1>
                        <p className='text-gray-600'>Years</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs