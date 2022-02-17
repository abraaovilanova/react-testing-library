import { useState } from 'react'

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled]= useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  return (
    <div>
        <button 
          style={{backgroundColor: disabled ? 'gray' : buttonColor }}
          onClick={()=>setButtonColor(newButtonColor)}
          disabled={disabled}
        >
          Change to {newButtonColor}
        </button>
        <input
          id="disable-button-checkbox" 
          type="checkbox" 
          onChange={(e)=>setDisabled(e.target.checked)} 
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
