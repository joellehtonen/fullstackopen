import { useState } from 'react'

const Display = ({ counter }) => {
    return (
        <div>{counter}</div>
    )
}

const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
    const [clicks, setClicks] = useState({left: 0, right: 0})
    const [allClicks, setAllClicks] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        const newClicks = allClicks
        const newLeft = clicks.left + 1
        newClicks.push('L')
        setAllClicks(newClicks)
        setClicks({
            ...clicks,
            left: newLeft
        })
        setTotal(newLeft + clicks.right)
    }

    const handleRightClick = () => {
        const newRight = clicks.right + 1
        setAllClicks(allClicks.concat('R'))
        setClicks({
            ...clicks,
            right: newRight
        })
        setTotal(clicks.left + newRight)
    }


    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}
            <p>{allClicks.join('')}</p>
            <p>total: {total}</p>
        </div>
    )
}

export default App