import { useState, useEffect } from 'react'

const Result = ({ value, countries }) => {
    const [results, setResults] = useState([])

    useEffect(() => {
        console.log('EFFECT')
        setResults(countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase())))
    }, [value, countries])

    const handleClick= (country) => {
        console.log('CLICKED')
        setResults(results.filter(c => c.name.common === country.name.common))
    }

    if (value) {
        console.log('RESULTS', results)
        if (results.length > 10) {
            return (
                <div>
                    Too many matches, please specify
                </div>
        )}
        if (results.length === 1) {
            return (
                <div>
                    <h2>{results[0].name.common}</h2>
                    <p>Region: {results[0].subregion}</p>
                    <p>Capital: {results[0].capital}</p>
                    <p>Area: {results[0].area} km2</p>
                    <p>Population: {results[0].population}</p>
                    <h3>Languages:</h3>
                    <ul>
                        {Object.entries(results[0].languages).map(([key, value]) => 
                            <li key={key}>
                                {value}
                            </li>)}
                    </ul>
                    <img src={results[0].flags.png} />
                </div>
        )}
        else {
            return (
                <ul>
                    {results.map(country => 
                        <div key={country.name.common}>
                            <li>
                                {country.name.common}
                                <button onClick={() => handleClick(country)}>Show</button>
                            </li>
                        </div>
                    )}
                </ul>
        )}
    }

    return null
}

export default Result