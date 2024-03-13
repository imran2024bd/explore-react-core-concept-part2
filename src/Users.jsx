import { useEffect, useState } from "react"

export default function Users () {
    const [users , setusers ]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setusers(data))
        // .then(data => console.log(data))
    } , [])

    return (
        <div>
            <h3> Users : {users.length}</h3>
        </div>
    )
}


/**
 * 1. declare a state to hold the data
 *  2. useEffect with call back and dependency array
 * 3.  use fetch to load data
 */



/**
 * 39-6 (Recap) Load Dynamic Data, API Call UseEffect Integrate State
 */