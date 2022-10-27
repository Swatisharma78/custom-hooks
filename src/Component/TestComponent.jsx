import React from 'react'
import {useEffect, useState} from "react"
import useTimeout from '../Hooks/useTimeout';

const TestComponent = () => {

// const [ready, setReady] = useState(false);
// useEffect(() => {
//   let timer = setTimeout(() =>{
//     setReady(true)
//   },3000)
//   return() =>{
//     clearTimeout(timer)
//   } 
// }, [])

const {timerData} = useTimeout(3000);


  return (
    <div>
      <h1>TestComponent</h1>
       <h3>{timerData ? " Test Component is ready" : "Test Component is not ready"}</h3>
    </div>
  )
}

export default TestComponent
