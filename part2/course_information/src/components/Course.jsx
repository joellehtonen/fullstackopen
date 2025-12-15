const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

const Content = ({ parts }) => {
    console.log('parts', parts)
    return (
    <ul>
        {parts.map(part =>
            <Part name={part.name} exercises={part.exercises} id={part.id}/>)}
    </ul>
    )
}

const Part = ({ name, exercises, id }) => {
    return (
        <li key={id}>
            {name} {exercises}
        </li>
    )
}

// const Total = (props) => {
//     return (
//         <p>
//             Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
//         </p>
//     )
// }

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            {/* <Total course={course} /> */}
        </div>
    )
}

export default Course