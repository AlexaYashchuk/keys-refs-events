import './App.css'
import List from './List'
import { useRef, useState } from 'react'

function App() {

//const arrOld = [2,3,4,5,4,3,2,1]

const arrOld = [{name:`Sasha`,age:29, city:`Minsk`},{city:`Minsk`,name:`Roma`,age: 35}] 

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

  function pressEnter(event) {
    if (event.key === `Enter`) {
      setArr([...arr, {name:text}]);
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
