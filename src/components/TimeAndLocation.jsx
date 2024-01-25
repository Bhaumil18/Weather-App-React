import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context'
import { DateTime } from 'luxon'

function TimeAndLocation() {
    const { td, setTd, hf } = useContext(GlobalContext)

    async function fetchTime() {
        try {
            const res = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=LFRX6JGQ5USF&format=json&by=position&lat=${hf.location.lat}&lng=${hf.location.lon}`)
            const data = await res.json()

            const { formatted, zoneName } = data

            const formattedDateTime = DateTime.fromFormat(formatted, "yyyy-MM-dd HH:mm:ss", { zone: zoneName })
                .toLocaleString({ weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' });
            if (formattedDateTime) {
                setTd(formattedDateTime)
            }


        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
            fetchTime()
    }, [hf])


    // if (td && td.length) {
        return (
            <div className="">
                <div className='flex flex-row justify-center my-4 sm:my-5 md:my-6 lg:my-6'>
                    <p className='text-white text-base lg:text-xl  font-extralight'>
                        {
                            td.split('at')[0]
                        }
                        {
                            td.split(' ')[5]
                        }
                        {
                            " "
                        }
                        {
                            td.split(' ')[6]
                        }
                        {
                            // td
                        }
                    </p>
                </div>
                <div className="flex items-center justify-center ">
                    <p className='text-center text-white text-2xl lg:text-3xl  font-medium'>
                        {hf.location.name}, {hf.location.country}
                    </p>
                </div>
            </div>
        )
    // }
}

export default TimeAndLocation