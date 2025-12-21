const Filter = ({ value, onChange }) => {

    return (
        <div>
            show names with <input value={value} onChange={onChange} />
        </div>
    )
}

export default Filter