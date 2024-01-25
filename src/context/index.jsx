import React, { createContext, useState } from 'react'

export const GlobalContext = createContext(null)

function GlobalState({ children }) {
    const [search, setSearch] = useState('')
    const [hf, setHf] = useState([])
    const [td, setTd] = useState('')
    const [cf, setCf] = useState(true)

    async function fetchData(ss) {
        try {
            const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=100921fea4de43b6b1661809240601&q=${ss}&days=5`)
            const dt = await res.json()
            if (dt) {
                setHf(dt)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <GlobalContext.Provider value={{ search, setSearch, fetchData, hf, td, setTd, cf, setCf }}>{children}</GlobalContext.Provider>
    )
}

export default GlobalState