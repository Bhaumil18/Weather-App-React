import React, { useContext, useEffect } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { GlobalContext } from '../context'

function Inputs() {

    const { search, setSearch, fetchData, setCf } = useContext(GlobalContext)

    useEffect(() => {
        fetchData("Surat")
    }, [])

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleKeyDown(e) {
        if (e.key == 'Enter') {
            handleClick();
        }
    }

    function handleClick() {
        fetchData(search)
    }

    function handleTempF() {
        setCf(false)
    }
    function handleTempC() {
        setCf(true)
    }

    return (
        <div className='flex flex-row justify-center my-4 sm:my-5 md:my-6 lg:my-6'>
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type="text"
                    placeholder='search for city...'
                    className='font-light py-1 px-1.5 sm:p-2 md:p-2 shadow-lg lg:p-2 w-full focus:outline-none capitalize placeholder:lowercase'
                    value={search}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} />
                <UilSearch onClick={handleClick} size={25} className="text-white cursor-pointer transion ease-out hover:scale-125" />
                {/* <UilLocationPoint size={25} className="text-white cursor-pointer transion ease-out hover:scale-125" /> */}
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button onClick={handleTempC} name='metric' className='text-xl font-light text-white'>°C</button>
                <p className='text-xl font-light text-white mx-1 pb-0.5'>|</p>
                <button onClick={handleTempF} name='imperial' className='text-xl font-light text-white'>°F</button>
            </div>
        </div>
    )
}

export default Inputs