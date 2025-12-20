
import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Joel Lehtonen', number: '040-5656473' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [personsToShow, setPersonsToShow] = useState(persons)

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

    const handleFilterTyping = (event) => {
        setFilter(event.target.value)
        setPersonsToShow(persons.filter(person => person.name.includes(filter)))
        console.log(personsToShow)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            show names with <input onChange={handleFilterTyping} value={filter}/>
            <h2>Add a new</h2>
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
                {personsToShow.map(person => 
                    <li key={person.name}>{person.name}: {person.number}</li>
                )}
            </ul>
        </div>
    )
}

export default App