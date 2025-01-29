import './App.css'
import List from './List'
import { useRef, useState } from 'react'

function App() {

//const arrOld = [2,3,4,5,4,3,2,1]

const arrOld = [{id:1,name:`Sasha`,age:29, city:`Minsk`},{id:2,city:`Minsk`,name:`Roma`,age: 35}] 

  const [arr,setArr] = useState(arrOld)
  //console.log(arr);
  

  const myRef = useRef(null)

  const [text,setText] = useState(``)

  const newText =(event) => {
    setText(event.target.value)
  }
  
  function focusFunc () {
    myRef.current.focus();
  }

  //const random = Math.ceil(Math.random()*1000-3)+3;

  function pressEnter(event) {
    if (event.key === `Enter`) {
      setArr([...arr, {name:text,id:arr.length+1}]);
      setText('')
    }
  }

  return (
    <>
    <input onKeyDown={pressEnter} type='text' ref={myRef} placeholder='сюда вводим что-то' onChange={newText} value={text}></input>
    <button onClick={focusFunc}>Нажмииии</button>
    <List array ={arr}/>
    </>
  )
}

export default App
