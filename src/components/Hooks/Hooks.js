import React, { useState } from 'react';
import './Hooks.css'

export const One = () => {
    const [name,setName] = useState("vanakam da mapla") //array of 0 has variable name //array of 1 has function thet change var name
    
    const [count,setCount] = useState (0)

    const [names,setNames] = useState(["Karthick","Rama","angle"])

    const [studentDetails,setStudentDetils] = useState([{
        id:1,name:"natpu"
    },{
        id:2,name:"mass"
    }])

    const setStudents = () => {
        // ...one  - here three dots is for spread operator .The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements. The spread operator is commonly used to make deep copies of JS objects.
        setNames(names=>[...names,"kabali","rajesh"])
    }

    const setStudentdetails = () =>{
        setStudentDetils(names=>[...names,{id:studentDetails.length + 1,name:"jebuz"}])
    }
    const changeName = () => 
    {
        setName("happy pongal")
    }
    const showCountInc = () =>
    {
        setCount(count + 1);
    }
    const showCountDec = () =>
    {
        setCount(count - 1);
    }
  return (
    <>
    <div className='container-fluid'>

        {/* string */}
    <div className='container'>
    <h1>{name}</h1>
    <button className='more' onClick={changeName}>name changer</button>

    </div>
   
    <br></br><br></br><hr></hr>

    {/* count  */}
    <div className='container'>
    <h1>{count}</h1>
    <button className='more' onClick={showCountInc}>hit hard</button>
    <button className='more' onClick={showCountDec}>hit Slow</button>
    <button className='more' onClick={() => setCount(0)}>Reset</button>
    </div>
    <br></br><br></br><hr></hr>

    {/* array  */}
    <div className='container'>
        <button className='more' onClick={setStudents}>setStudents</button>
        <br></br><br></br>
<ul>
    {
        names.map(e => <li key = {e}>{e}</li>)
    }
</ul>
    </div>
    <br></br><br></br><hr></hr>

{/* array of objects  */}
    <div className='container'>
    <button className='more' onClick={setStudentdetails}>setStudents</button>
    <br></br><br></br>
    <ul>
    {
        studentDetails.map(e => <li key = {e.id}>{e.id}{e.name}</li>)
    }
</ul>
    </div>

    <div className='container'>

    </div>
    </div>
    </>
  )
}


