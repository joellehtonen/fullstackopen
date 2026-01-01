import axios from 'axios'
import { useState, useEffect } from 'react'

const Weather = ({ city }) => {
    const [weather, setWeather] = useState([])
    const [temp, setTemp] = useState(0)
    const [icon, setIcon] = useState(null)
    const [description, setDescription] = useState('')
    const [error, setError] = useState(false)
    const api_key = import.meta.env.VITE_WEATHER_API_KEY

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
            .then(response => {
                setWeather(response)
                setTemp(response.data.main.temp)
                setDescription(response.data.weather[0].description)
                setIcon(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
            })
            .catch(error => setError(true))
    }, [city])

    if (error)
        return (<h4>Weather unavailable...</h4>)

    console.log(weather)

    return (
        <div>
            <h3>Weather in {city}</h3>
            <p>Temperature {Math.round((temp - 273.15) * 10) / 10} Celcius</p>
            <p>{description}</p>
            <img src={icon} />
        </div>
    )
}

export default Weather