import React from 'react'

const Minicard = () => {
  return (

        <div className='  flex flex-col  justify-center items-center gap-1   duration-300 transition-all ease-in rounded  p-[0.5rem] hover:bg-white hover:scale-[1.2] hover:text-black text-white '>

        <div id='icon' className='w-1/2'>
            <img src="//cdn.weatherapi.com/weather/64x64/day/122.png" alt="" />
        </div>
        <div id='day'>
            MON
        </div>
        <div id='temp'>32<sup>o</sup>C</div>
        </div>
        
 
  )
}

export default Minicard