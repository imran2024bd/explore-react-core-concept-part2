
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button Click');
  }

 const  handleClick2 = () => {
  alert (' button click 2')
 }

const addToFive = (num) => {
  alert (num + 5);
}

  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Users></Users>

      
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick} >Clicked Me </button>

      <button onClick={handleClick2}>Click 2</button>
    {/* in one line handleClick with alert function */}
      <button onClick={()=>{alert (' Third button alert')}}>Third button </button>

       {/* complex button  */}
      <button onClick={() => addToFive(3)}>Add</button>
    </>
  )
}

export default App
