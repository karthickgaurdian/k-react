import React, { useEffect, useState } from 'react';
import './UseEffect.css'


const Effect = () => {

    const [values, setValues] = useState([]);

    const [name, setName] = useState("");

    useEffect(() => {
        console.log("useEffect invoked")
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => setValues([json]))
    }, [name])
    return (
        <>
            {
                values.map((e) => <h1>{e.title}{e.userId}</h1>)
            }
            <h1>{name}</h1>{name}
            <button onClick={() => setName("karthick mass")}>Add new</button>
        </>
    )
}

export default Effect;