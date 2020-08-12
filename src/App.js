import React, { useState } from 'react';
import './App.css'
import changeIcon from './assets/changeIcon.svg'

const App = () => {
    const [decimal, setDecimal] = useState(0)
    
    function handleBinary() {
        const inputBinary = Array.from(document.querySelector('.binary-input').value).map( item => Number(item))
        const validInput = inputBinary.every( item => {return item <= 1})
        
        if (validInput) {
            const decimalNumber = inputBinary.reverse().reduce( (acumulador, number, index) => {
                return acumulador += number * (2 ** index)}, 0
                )
        
            document.querySelector('.binary-input').value = ''
        
            return (
                setDecimal(decimalNumber)
            )
        } else {
            alert('Insert only 1 or 0! Try again!')
            document.querySelector('.binary-input').value = ''
        }
    }

    return (
        <>
            <div id="app">
              <h2>BIN-2-DEC</h2>
              <div id="calculator">
                <input type="number" placeholder="Type here..." className="binary-input"/>
                <button onClick={handleBinary}>
                  <img src={changeIcon} alt="Convert"/>
                </button>
                <p>{decimal}</p>
              </div>
            </div>
        </>
    )
}

export default App;