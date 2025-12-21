import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Joel Voittovuori', number: '040-5656473' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

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
            setFilter('')
            return
        }
        setPersons(prev => prev.concat(newPerson))
        setNewName('')
        setNewNumber('')
        setFilter('')
        console.log('PERSONS', persons)
    }
    
    const handleNameTyping = (event) => {
        setNewName(event.target.value)
        console.log('typing:', event.target.value)
    }

    const handleNumberTyping = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterTyping = (event) => {
        const value = event.target.value
        setFilter(value)
        console.log(personsToShow)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter filter={filter} onChange={handleFilterTyping} />
            <h2>Add a new</h2>
            <PersonForm onSubmit={handleNameSubmit} onNameChange={handleNameTyping} onNumberChange={handleNumberTyping} nameValue={newName} numberValue={newNumber}/>
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow}/>
        </div>
    )
}

export default App