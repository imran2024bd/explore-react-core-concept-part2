import { useEffect, useState } from 'react'
import './friends.css'
export default function Friends (){
    const [friends , setfriends] = useState([]);
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfriends(data))
    },[])
    return(
        <div className="box">
            <h3> Friends : {friends.length} </h3>
        </div>
    )
}



/**
 * 1. declare a state to hold the data
 *  2. useEffect with call back and dependency array
 * 3.  use fetch to load data
 */