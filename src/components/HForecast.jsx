import React, { useContext } from 'react'
import { GlobalContext } from '../context'


function HF({ time, tmp, tt, index }) {
    const { cf, hf } = useContext(GlobalContext)

    return <div className='flex flex-col items-center justify-center min-w-32'>
        <p className='font-light text-sm '>{time}</p>
        <img alt="tmp" src={hf.forecast.forecastday[0].hour[index].condition.icon} className='w-12 h-12 my-1 scale-125' />
        <p className='font-medium'>{cf ? tmp.temp_c : tmp.temp_f}°</p>
    </div>
}

function HForecast({ title, num = 24 }) {

    const { hf } = useContext(GlobalContext)
    const elements = Array.from({ length: num }, (_, index) => index);

    return (
        <div >
            <div className="flex items-center justify-start my-6 ">
                <p className='text-white uppercase font-medium'>{title}</p>
            </div>
            <hr className='my-2' />
            <div className='flex items-center justify-between text-white overflow-scroll scroll-smooth scrollbar-hide'>
                {
                    elements.map((_, index) => {
                        return <HF key={index}
                            index={index}
                            time={hf?.forecast?.forecastday[0]?.hour[(index)].time.split(' ')[1]}
                            tt={hf?.forecast?.forecastday[0]?.hour[index].condition.text} tmp={hf?.forecast?.forecastday[0]?.hour[(index)]} ></HF>
                    })
                }
            </div>
        </div>
    )
}

export default HForecast