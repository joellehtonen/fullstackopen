import { useState, useEffect } from 'react'
import axios from 'axios'
import Result from './components/Result'

const App = () => {
    const [countries, setCountries] = useState([])
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        axios
            .get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then((response) => {
                setCountries(response.data)
            })
            .catch(error => {
                setError(true)
            })
    }, [])
    // console.log('countries', countries)

    const handleTyping = (event) => {
        const data = event.target.value
        console.log('typing', data)
        setValue(data)
    }

    if (error)
        return <div>Sorry, an error occurred...</div>

    return (
        <div>
            <h1>DATA FOR COUNTRIES</h1>
            <div>
                Find countries 
                <input value={value} onChange={handleTyping} />
            </div>
            <Result value={value} countries={countries} />
        </div>
    )
}

export default App