const Header = ({ name }) => {
    return (
        <h2>{name}</h2>
    )
}

const Content = ({ parts }) => {
    return (
        <ul>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
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

    // console.log('result', result)

    return (
        <p>
            Number of exercises {result}
        </p>
    )
}

const Course = ({ courses }) => {
    console.log('courses', courses)
    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <Header name={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>))}
        </div>
    )}

export default Course