import { useState } from 'react';
import './App.css';
import Body from './components/Body';

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <Body />
    </>
  )
}

export default App
