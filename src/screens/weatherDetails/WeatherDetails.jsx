import React from 'react'
// import { weatherd } from '../weatherDisplay/WeatherDisplay'

const WeatherDetails = ({weatherDetails}) => {
    
  return (
    <div className='w-[20rem] scale-105 h-[30rem] p-6  flex flex-col justify-around text-[#232931]  items-center bg-center bg-no-repeat rounded-3xl bg-[url("https://w0.peakpx.com/wallpaper/681/677/HD-wallpaper-grey-sky-cloud-thumbnail.jpg")]'>
        <div className='text-center'>
            <h1 className='text-5xl font-bold'>Monday</h1>
            <h2 className='mt-4'>18 september 2022</h2>
        </div>
        <div className='w-full '>
            <img src={weatherDetails?.current?.condition?.icon} className='m-[0_auto] w-1/2 object-cover' alt="" />
        </div>
        <div className='text-center'>
           <h1 className='text-5xl font-bold'>{weatherDetails?.current?.temp_c}</h1> 
           <h2 className='text-2xl mt-3 font-bold'>{weatherDetails?.current?.condition?.text}</h2>
        </div>
</div>
  )
}

export default WeatherDetails