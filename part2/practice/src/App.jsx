import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import noteService from './services/notes'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note...')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        console.log('effect')
        noteService
            .getAll()
            .then(response => {
                console.log('promise fulfilled')
                setNotes(response)
            })
    }, [])
    console.log('rendering', notes.length, 'notes')

    const toggleImportance = (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }
        noteService
            .update(id, changedNote)
            .then(response => {
                setNotes(notes.map(n => n.id === id ? response : n))
            })
        .catch(error => {
            setErrorMessage(`the note '${note.content}' is already deleted from the server`)
            setTimeout(() => setErrorMessage(null), 5000)
            setNotes(notes.filter(n => n.id !== id))
        })
        // console.log('importance of', id, 'needs to be toggled')
    }

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
        }
        noteService
            .create(noteObject)
            .then(response => {
                console.log(response)
                setNotes(notes.concat(response))
                setNewNote('')
            })
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll ? notes : notes.filter(note => note.important)
    
    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} />
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note => 
                    <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)}/>
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange} onClick={() => setNewNote('')}/>
                <button type='submit'>save</button>
            </form>
            <Footer />
        </div>
    )
}

export default App