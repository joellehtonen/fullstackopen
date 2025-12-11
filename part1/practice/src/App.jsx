import { useState } from 'react'

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>The app is used by pressing the buttons.</div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join('')}
        </div>
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
            <Button onClick={handleLeftClick} text='left' />
            <Button onClick={handleRightClick} text='right' />
            {clicks.right}
            <History allClicks={allClicks} />
        </div>
    )
}

export default App