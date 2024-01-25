import React, { useContext } from 'react'
import { GlobalContext } from '../context'



function HF({ day, tmp, tt, index }) {
    const { cf, hf } = useContext(GlobalContext)
    let d = new Date(day)
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


    return <div className='flex flex-col items-center justify-center min-w-32'>
        <p className='font-light text-sm '>{days[d.getDay()]}</p>
        <img src={hf?.forecast?.forecastday[index].day.condition.icon} className='w-12 my-1 scale-125' />
        <p className='font-medium'>{cf ? tmp.avgtemp_c : tmp.avgtemp_f}°</p>
    </div>
}

function Forecast({ title, num = 5 }) {

    const { hf } = useContext(GlobalContext)
    console.log(hf)
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
                        return <HF key={index} index={index} day={hf?.forecast?.forecastday[index].date} tt={hf?.forecast?.forecastday[index].day.condition.text} tmp={hf?.forecast?.forecastday[index].day} ></HF>
                    })
                }
            </div>
        </div>
    )
}

export default Forecast