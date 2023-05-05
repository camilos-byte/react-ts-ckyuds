import * as React from 'react';
import { useState } from 'react';
import './style.css';

function Counter() {
  const [count, setCount] = useState(2)

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count => count + 2)}>Aumentar</button>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
