export default function Friend({friend}){
    // console.log(friend);
    const {name , email} = friend;
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
        </div>
    )
}








/**
 * 1. declare a state to hold the data
 * 2. useEffect with call back and dependency array
 * 3.  use fetch to load data
 */



/**
 * 01 . 
 * 39-6 (Recap) Load Dynamic Data, API Call UseEffect Integrate State
 */