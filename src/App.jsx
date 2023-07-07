import { useState } from 'react'
import './App.css'

function App() {
  const [sobrenome, setSobrenome] = useState('Sarah')

/*   
  let sobrenome = 'Prado'
  sobrenome.toUpperCase() */
  const morfar = ()=> {
    setSobrenome(sobrenome.toUpperCase())
  }
  
  return (
    <>
    <h1>Sarah</h1>
    <div>{sobrenome}</div>
    {/* Guardar variável js no htlm entre chaves, usar s
    hift pra isso */}
    {/* <div>{sobrenome.toUpperCase()}</div> */}

    <button type= "button" onClick={()=> setSobrenome(sobrenome.toUpperCase())}>Aperte-me</button>

    </>
  )
}

export default App
