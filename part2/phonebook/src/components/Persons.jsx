const Persons = ({ personsToShow, onClick }) => {
    return (
        <ul>
            {personsToShow.map(person => 
                <li key={person.id}>
                    {person.name}: {person.number} <button id={person.id} name={person.name} onClick={onClick}>delete</button>
                </li>
            )}
        </ul>
    )
}

export default Persons