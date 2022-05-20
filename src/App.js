import { useSelector, useDispatch } from 'react-redux';
import {actions} from './store/index'


function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const add = () => {
    dispatch(actions.add(10))
  }

  return (
    <div style={{ marginLeft: '50%', marginTop: '300px' }}>
      <h1 >Counter APP</h1>
      <h2 style={{ marginLeft: '100px' }}>{counter}</h2>
      <button onClick={increment} style={{ padding: '10px' }}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '30px', padding: '10px' }}>Decrement</button>
      <button onClick={add} style={{ marginLeft: '30px', padding: '10px' }}>Add Values</button>

    </div>
  );
}

export default App;
