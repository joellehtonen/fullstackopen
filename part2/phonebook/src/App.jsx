
import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Joel Lehtonen', id: 1 }
    ])
    const [newName, setNewname] = useState('')

    const handleNameSubmit = (event) => {
        console.log('in submit')
        event.preventDefault()
        const newPerson = {
            name: newName, 
            id: String(persons.length + 1)
        }
        console.log('newPerson', newPerson)
        setPersons(persons.concat(newPerson))
    }
    
    const handleNameTyping = (event) => {
        setNewname(event.target.value)
        console.log('typing:', event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleNameSubmit}>
                <div>
                    name: <input onChange={handleNameTyping}/>
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => 
                    <li key={person.id}>{person.name}</li>
                )}
            </ul>
        </div>
    )
}

export default App