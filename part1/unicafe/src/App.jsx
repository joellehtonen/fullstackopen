import { useState } from 'react'

const StatisticLine = (props) => {
    return (
        <p>{props.text}: {props.value}</p>
    )
}

const Statistics = ({ all, good, neutral, bad, score }) => {
    if (all < 1)
        return (
            <h2>No feedback given</h2>
    )
    const average = score / all
    const positives = good / all * 100
    return (
        <>
        <h2>Statistics</h2>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='All' value={all} />
        <StatisticLine text='Average' value={average} />
        <StatisticLine text='Positives' value={positives} />
        </>
    )
}

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
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
            <Button onClick={handleGood} text='GOOD' />
            <Button onClick={handleNeutral} text='NEUTRAL' />
            <Button onClick={handleBad} text='BAD' />

            <Statistics all={all} good={good} neutral={neutral} bad={bad} score={score} />
        </div>
    )
}

export default App