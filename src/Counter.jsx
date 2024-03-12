import { useState } from "react"

export default function Counter (){
    const [count , setcount] = useState(0);
    // console.log(count , setcount);
    const handleAdd = () => {
        const newCount = count + 1;
        setcount(newCount)
    }

    const handleReduce =() => {
        const reduceCount = count - 1;
        setcount(reduceCount)
    }


    return(
        <div style={{border: '2px solid yellow'
        }}>
            <h3>Counter : {count} </h3>
            <button onClick={handleAdd}>Add</button>

            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}