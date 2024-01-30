import { Input } from 'postcss'
import React, { useState } from 'react'
import { weathercall } from '../../config/Api'
import Minicard from '../../components/Minicard/Minicard'


const WeatherDisplay = ({weatherdetail_func,searchdetail_func}) => {
   
    const [searchlist, setsearchlist] = useState([])
  const [input, setinput] = useState('')
  
  const [weatherDetails, setweatherDetails] = useState({})
  console.log(searchlist)
    
  return (
    <div className=' rounded-xl flex-1 ml-5  bg-[#232931]'>
        <div className='w-full p-5 flex  h-full justify-between flex-col'>

       
        <form className='  rounded flex'>

        <input type="text" placeholder='Search Location'  className='bg-transparent border-4 w-full border-solid border-[#252D33] placeholder:text-[#4C545B] text-[#f6f6f7] p-2 flex-1 focus:outline-none'  value={input} onChange={(e)=>{setinput(e.target.value)}} />
        <button className='bg-[#9CA1A5]  p-2 rounded-r rounded-rl text-white' onClick={(e)=>{
            e.preventDefault()
            if(!input){
                alert("Please enter a location")
            }else{
              weathercall(input).then((res)=>{setweatherDetails(res)
                weatherdetail_func(res)
               const dummylst=[...searchlist]
               dummylst.push(input)
               setsearchlist(dummylst)
               searchdetail_func(dummylst)
               setinput('')


            })

             

              }
            // weathercall(input</form>).then((res)=>setweatherDetails(res))
            
        }} type='submit'>Search</button>
        </form>
        <div  className='text-white w-full h-full flex justify-between mt-7'>
            <h1 className='font-semibold'>Name</h1>
            <h2>{weatherDetails?.location?.name}</h2>
        </div>
        <div  className='text-white w-full h-full flex justify-between mt-2'>
            <h1 className='font-semibold'>TEMP</h1>
            <h2>{weatherDetails?.current?.temp_c}</h2>
        </div><div  className='text-white w-full h-full flex justify-between mt-2' >
            <h1 className='font-semibold'>HUMIDITY</h1>
            <h2>{weatherDetails?.current?.humidity}</h2>
        </div><div  className='text-white w-full h-full flex justify-between mt-2' >
            <h1 className='font-semibold'>WIND SPEED</h1>
            <h2>{weatherDetails?.current?.wind_kph}</h2>
        </div>
        <div className='flex justify-between rounded mt-[3rem] mb-[3rem] ' id='cards'>

        <Minicard/>
        <Minicard/>
        <Minicard/>
        <Minicard/>
        </div>

        </div>
       
            {/* <h1>{weatherDetails?.location?.country},{weatherDetails?.location?.name}</h1>
            <h1>{weatherDetails?.current?.temp_c}</h1> */}

      
    </div>
  )
}

export default WeatherDisplay