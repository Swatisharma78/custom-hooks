import './App.css';
import {useEffect, useState} from "react"
import TestComponent from './Component/TestComponent';
import useTimeout from './Hooks/useTimeout';
import useFetch from './Hooks/useFetch';

function App() {
  const {timerData} = useTimeout(1000);


  const {loading, data, error} =useFetch()
 
  return (
    <div className="App">
      
      <h1>{timerData ? " I am ready" : "I am not ready"}</h1>
     <div> {loading ? "loading" : "complete" }</div>
     {data.map(item =>{
      return <div key={item.id}>{item.login}</div>
     })}
     {/* <TestComponent/> */}
    </div>
  );
}

export default App;
