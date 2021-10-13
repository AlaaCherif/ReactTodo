import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App(props) {
  const [name,setName]=useState("fucker");
  return (
    <div className="container App">
      <button type="button" onClick={()=>setName("father")}>CHANGE</button>
      Hello mother {name}
      <Hello color={props.hi} />
    </div>
    
  );
}
function Hello(props)
{
  return <h1 className="App">Hello Wold! I am the biggest mother fucker in {props.color}</h1>;
}

export default App;
