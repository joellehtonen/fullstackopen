const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

const Content = ({ parts }) => {
    return (
    <ul>
        {parts.map(part =>
            <Part name={part.name} exercises={part.exercises} key={part.id}/>)}
    </ul>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <li>
            {name} {exercises}
        </li>
    )
}

const Total = ({ parts }) => {
    // console.log('parts', parts)

    const result = parts.reduce((acc, cur) => {
        // console.log('acc', acc)
        // console.log('cur', cur)
        return acc + cur.exercises
    }, 0)

    console.log('result', result)

    return (
        <p>
            Number of exercises {result}
        </p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course