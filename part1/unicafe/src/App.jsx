import { useState } from 'react'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
        console.log('good:', updatedGood)
    }

    const handleNeutral = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        console.log('neutral:', updatedNeutral)
    }

    const handleBad = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
        console.log('bad:', updatedBad)
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={handleGood}>GOOD</button>
            <button onClick={handleNeutral}>NEUTRAL</button>
            <button onClick={handleBad}>BAD</button>

            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )
}

export default App