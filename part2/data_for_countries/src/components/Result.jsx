const Result = ({ value, countries }) => {
    let results
    if (value) {
        results = countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))
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
                    <p>Capital: {results[0].capital[0]}</p>
                    <p>Area: {results[0].area}</p>
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
                        <li key={country.name.common}>{country.name.common}</li>
                    )}
                    <button>SHOW</button>
                </ul>
        )}
        return
    }

    return null
}

export default Result