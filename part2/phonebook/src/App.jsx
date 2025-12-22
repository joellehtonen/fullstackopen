import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        console.log('effect')
        personService
            .getAll()
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }, [])
    console.log('fetched', persons.length, 'numbers')

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
        personService
            .create(newPerson)
            .then(response => {
                setPersons(prev => prev.concat(response.data))
                setNewName('')
                setNewNumber('')
                setFilter('')
            })
        console.log('PERSONS', persons)
    }

    const handleDelete = (event) => {
        console.log('event', event)
        if (confirm(`Delete ${event.target.name} from phonebook?`)) {
            personService
                .erase(event.target.id)
                .then(() => {
                    setPersons(persons.filter(p => p.id !== event.target.id))
                })
        }
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
            <Persons personsToShow={personsToShow} onClick={handleDelete}/>
        </div>
    )
}

export default App