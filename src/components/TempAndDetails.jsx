import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import { UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'

function TempAndDetails() {
    const { hf, cf } = useContext(GlobalContext)
    const [tt, setTt] = useState(hf.current.condition.text)

    useEffect(() => {
        setTt(hf.current.condition.text)
    }, [hf])
    return (
        <div>
            <div className="flex justify-center items-center py-6 text-cyan-300 text-lg sm:text-xl md:text-xl lg:text-xl">
                <p className='text-center'>{tt}</p>
            </div>

            <div className="flex justify-between items-center py-3 text-white">
                <img src={hf.current.condition.icon} className='w-20 scale-125' />
                <p className='text-5xl'>{cf ? hf.current.temp_c : hf.current.temp_f}°</p>
                <div className="flex flex-col space-y-2">
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperature size={18} />
                        <p>Real Feel:</p>
                        <p className='font-medium ml-1'>{hf.current.feelslike_c}</p>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} />
                        <p>Humidity:</p>
                        <p className='font-medium ml-1'>{hf.current.humidity}%</p>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} />
                        <p>Wind:</p>
                        <p className='font-medium ml-1'>{hf.current.wind_kph} km/h</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center space-x-2 text-white text-sm py-2'>
                <UilSun />
                <p className='font-light'>Rise: <span className='font-medium ml-1'>{hf.forecast.forecastday[0].astro.sunrise}</span></p>
                <p className='font-light'>|</p>
                <UilSunset />
                <p className='font-light'>Set: <span className='font-medium ml-1'>{hf.forecast.forecastday[0].astro.sunset}</span></p>
            </div>
        </div>
    )
}

export default TempAndDetails