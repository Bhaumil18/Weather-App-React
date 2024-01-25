import React, { useContext } from 'react'
import { GlobalContext } from '../context'

function TopButtons() {

    const { fetchData,setSearch } = useContext(GlobalContext);

    function handleClick(e) {
        setSearch(e.target.name)
        fetchData(e.target.name)
    }

    const cities = [
        {
            title: "Ahmedabad"
        },
        {
            title: "Surat"
        },
        {
            title: "Rajkot"
        },
        {
            title: "Vadodara"
        },
        {
            title: "Mahesana"
        }
    ]

    return (
        <div className='topButton flex justify-around text-center'>
            {
                cities.map((city, index) => {
                    return (
                        <button onClick={handleClick} key={index} name={city.title} className='lg:text-lg text-white'>{city.title}</button>
                    )
                })
            }
        </div>
    )
}

export default TopButtons