
import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Joel Lehtonen', number: '' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameSubmit = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
        console.log('newPerson', newPerson)
        const existingName = persons.filter(person => person.name === newName)
        if (existingName.length > 0) {
            alert(`${newName} is already in the phonebook`)
            setNewName('')
            setNewNumber('')
            return
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
    }
    
    const handleNameTyping = (event) => {
        setNewName(event.target.value)
        console.log('typing:', event.target.value)
    }

    const handleNumberTyping = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleNameSubmit}>
                <div>
                    name: <input onChange={handleNameTyping} value={newName}/>
                </div>
                <div>
                    number: <input onChange={handleNumberTyping} value={newNumber}/>
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => 
                    <li key={person.name}>{person.name}: {person.number}</li>
                )}
            </ul>
        </div>
    )
}

export default App