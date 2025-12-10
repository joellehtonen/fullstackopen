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

    const handleLeftClick = () => {
        setAllClicks(allClicks.concat('L'))
        setClicks({
            ...clicks,
            left: clicks.left + 1
        })
        console.log('clicked left')
    }

    const handleRightClick = () => {
        setAllClicks(allClicks.concat('R'))
        setClicks({
            ...clicks,
            right: clicks.right + 1
        })
        console.log('clicked right')
    }


    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}
            <p>{allClicks.join('')}</p>
        </div>
    )
}

export default App