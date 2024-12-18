import './App.css';
import React, { useReducer, useState } from 'react';

// action types.
const ACTION_TYPES = {
  UP : 'UP',
  DOWN : 'DOWN',
  RESET : 'RESET'
}

function App() {
  const [number, setNumber] = useState(1);

  function CountReducer(oldCount, action) {
    switch (action.type) {
      case ACTION_TYPES.UP: {
        return oldCount + action.number;
      }
      case ACTION_TYPES.DOWN: {
        return oldCount - action.number;
      }
      case ACTION_TYPES.RESET: {
        return 0;
      }
      default:
        break;
    }
  }
  const [count, countDispatch] = useReducer(CountReducer, 0);

  return ( <div>
      <button type='button' onClick={Down}>-</button>
      <button type='button' onClick={Reset}>0</button>
      <button type='button' onClick={Up}>+</button>
      <input type='text' value={number} onChange={ChangeNumber} />
      <span> {count}</span>
    </div>
  );

  function Down() {
    countDispatch({type: ACTION_TYPES.DOWN, number: number});
  }
  function Reset() {
    countDispatch({type: ACTION_TYPES.RESET, number: number});
  }
  function Up() {
    countDispatch({type: ACTION_TYPES.UP, number: number});
  }
  function ChangeNumber(event) {
    setNumber(Number(event.target.value));
  }
}

export default App;
