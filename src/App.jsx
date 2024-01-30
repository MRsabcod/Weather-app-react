import React, { useEffect, useState } from 'react'
import { weathercall } from './config/Api'
import WeatherDisplay from './screens/weatherDisplay/WeatherDisplay'
import WeatherDetails from './screens/weatherDetails/WeatherDetails'

const App = () => {

  const [weatherDetails, setweatherDetails] = useState({})
  const weatherdetail_func=(details) => {
    setweatherDetails(details)
  }
  
  // useEffect(() => {
  //   // weathercall()
  //   weathercall(text).then((res)=>setweatherDetails(res))
  
    
  // }, [])
  const [searchDetails, setsearchDetails] = useState([])
    const searchdetail_func=(details) => {
    setsearchDetails(details)
  }
  console.log(weatherDetails,searchDetails)
  return (
    <div className='flex gap-10 items-center'>

    <div className='w-[48rem] rounded-xl h-[30rem] bg-[#232931] flex'>

      <WeatherDetails weatherDetails={weatherDetails} />
      <WeatherDisplay weatherdetail_func={weatherdetail_func} searchdetail_func={searchdetail_func}  />
    
    </div>
    <div className='h-full rounded-xl flex flex-col justify-center items-center bg-[#232931] text-white '>
<h1 className='mt-10'>History</h1>
<div className='p-5'>

{searchDetails.map((elem)=>{
  return <p className='mt-2'>{elem}</p>
})}
</div>


    </div>
    </div>
  )
}

export default App