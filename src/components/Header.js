
function Header(props) {

    console.log(props)
    //props are read-only.
    // you cannot edit it
    // props.name = 'Ironhack'

    return (
        // React Fragments <>
        // To avoid wrapping things in <div> . . 
        <>
           {props.name}
           <h1>He is {props.age} years old</h1>
           {props.children}
        </>
    )
}

export default Header