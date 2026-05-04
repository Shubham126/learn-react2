import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

 const generatePassword = useCallback(() => {
  let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if(number){
    string += '0123456789';
  }

  if(symbol){
    string += '!@#$%^&*()_+';
  }

  let newPassword = '';

  for(let i = 1; i<=length; i++){
    const char = Math.floor(Math.random() * string.length)

    newPassword += string.charAt(char);
  }

  setPassword(newPassword);

 }, [number, symbol, length, setPassword])

  return (
    <>
      <h1> this is a password generator</h1>
      <button onClick={generatePassword}>Generate Password</button>
      <h1>{password}</h1>
    </>
  )
}

export default App
