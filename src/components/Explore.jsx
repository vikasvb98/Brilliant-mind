import React, { useState } from 'react'
import axios from 'axios'

const Explore = () => {
    const [jobs , setJobs] = useState([])
    // const options = {
    //     method: 'GET',
    //     url: 'https://jsearch.p.rapidapi.com/search',
    //     params: {
    //       query: 'Python developer in Texas, USA',
    //       page: '1',
    //       num_pages: '1'
    //     },
    //     headers: {
    //       'X-RapidAPI-Key': '05410c2f59msh7ae246e5f3c2395p167d37jsn492f802f96ae',
    //       'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //     }
    //   };
      
    //   const jobResponse = async () => {
    //     try {
    //         const response = await axios.request(options);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //   }
    //   jobResponse();
  return (
    <div className=' w-full h-screen flex justify-center  carrer'>
        <form action="" className=' w-3/4 h-16 px-4 z-10 rounded-xl mt-10 bg-gray-200 border-sky-300 flex items-center justify-between shadow-xl shadow-sky-300 hover:border-sky-300 hover:border-2 active:border-sky-300'>
            <input type="text" placeholder='Search ...' className='w-3/4 px-3 py-2 rounded-lg bg-transparent outline-none ' />
            <button className='shadow__btn w-24 h-10 text-sm p-1 '>Search</button>
        </form>

    </div>
  )
}

export default Explore