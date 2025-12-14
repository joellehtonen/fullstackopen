import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const handleClick = () => {
    const random = Math.floor(Math.random() * 8)
    //console.log('random value is', random)
    setSelected(random)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    //console.log('votes', newVotes)

    let most = 0
    let mostIndex = 0
    for (let i = 0; i < newVotes.length; i++)
    {
        //console.log('votes[i]', newVotes[i])
        if (newVotes[i] > most)
        {
            most = newVotes[i]
            mostIndex = i
        }
    }
    setMostVoted(mostIndex)
    //console.log('most', mostIndex)
  }

  return (
    <div>
        <h2>Anecdote of the day</h2>
        <div>
            "{anecdotes[selected]}"
        </div>
        <div>
            has {votes[selected]} votes
        </div>
        <div>
            <button onClick={handleVote}>vote</button>
            <button onClick={handleClick}>next anecdote</button>
        </div>
        <h2>Anecdote with most votes</h2>
        <div>
            "{anecdotes[mostVoted]}"
        </div>
                <div>
            has {votes[mostVoted]} votes
        </div>
    </div>
  )
}

export default App