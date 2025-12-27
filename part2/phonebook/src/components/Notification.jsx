const Notification = ({ message, error }) => {
    const defaultStyle = {
        color: 'green',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorStyle = {
        color: 'red',
        fontStyle: 'bold',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null)
        return null

    return (
        <div style={error ? errorStyle : defaultStyle}>
            {message}
        </div>
    )
}

export default Notification