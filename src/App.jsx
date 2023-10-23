import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick() {
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('button 2 clicked');
  }
  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>CLick ME</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('Third clicked') }}>third</button>
      {/* will cann itself when saved */}
      {/* <button onClick={addToFive(3)}>Four</button> */}
      {/* to solve this issue */}
      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
