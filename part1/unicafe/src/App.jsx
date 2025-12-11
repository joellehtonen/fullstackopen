import { useState } from 'react'

const Average = ({ score, all }) => {
    const average = score / all
    if (all < 1)
        return (
            'Average: 0' 
    )
    return (
        'Average: ' + average
    )
}

const Positive = ({ good, all }) => {
    const positive = (good / all) * 100
    if (all < 1)
        return (
            'Positive: '
    )
    return (
        'Positive: ' + positive + '%'
    )
}

const Statistics = ({ all, good, neutral, bad, score }) => {
    if (all < 1)
        return (
            <h2>No feedback given</h2>
    )
    return (
        <>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {all}</p>
        <Average score={score} all={all} />
        <br /> <br />
        <Positive good={good} all={all} />
        </>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [score, setScore] = useState(0)

    const handleGood = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
        console.log('good:', updatedGood)
        setAll(all + 1)
        setScore(score + 1)
    }

    const handleNeutral = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        console.log('neutral:', updatedNeutral)
        setAll(all + 1)
    }

    const handleBad = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
        console.log('bad:', updatedBad)
        setAll(all + 1)
        setScore(score - 1)
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={handleGood}>GOOD</button>
            <button onClick={handleNeutral}>NEUTRAL</button>
            <button onClick={handleBad}>BAD</button>

            <Statistics all={all} good={good} neutral={neutral} bad={bad} score={score} />
        </div>
    )
}

export default App