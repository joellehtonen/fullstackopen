
import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Joel Lehtonen' }
    ])
    const [newName, setNewName] = useState('')

    const handleNameSubmit = (event) => {
        event.preventDefault()
        console.log('newName', newName)
        const existingName = persons.filter(person => person.name === newName)
        console.log('existingName', existingName)
        if (existingName.length > 0) {
            alert(`${newName} is already in the phonebook`)
            return
        }
        const newPerson = {
            name: newName
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
    }
    
    const handleNameTyping = (event) => {
        setNewName(event.target.value)
        console.log('typing:', event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleNameSubmit}>
                <div>
                    name: <input onChange={handleNameTyping} value={newName}/>
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => 
                    <li key={person.name}>{person.name}</li>
                )}
            </ul>
        </div>
    )
}

export default App