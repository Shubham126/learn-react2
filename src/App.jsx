import { useState, useCallback, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

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
      <div>
        <input 
        type='text'
        value={password}
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyToClipboard}>Copy</button>
      </div>
      
      <div>
        <input 
        type = 'range'
        min='6'
        max='99'
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        />
        <p>Length: {length}</p>
      </div>

      <div>
        <input
        type='checkbox'
        checked={number}
        onChange= {(e) => setNumber(e.target.checked)}
        />
        <p>Include Numbers</p>
      </div>

      <div>
        <input
        type='checkbox'
        checked={symbol}
        onChange= {(e) => setSymbol(e.target.checked)}
        />
        <p>Include Symbols</p>
      </div>
    </>
  )
}

export default App
