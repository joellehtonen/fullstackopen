
import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Joel Lehtonen' }
    ])
    const [newName, setNewname] = useState('')

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div> DEBUG: {newName}</div>
                <div>
                    name: <input />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
        </div>
    )
}

export default App