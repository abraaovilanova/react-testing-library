import Counter from './componentes/Counter/Counter'
import Dropdown from './componentes/Dropdown/Dropdown'
import './App.css';
import { useState } from 'react';

function App() {
  
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  return (
    <div className="App">
      <Counter />
      <hr />
      {selectedPokemon && <div> Seu pokemon: {selectedPokemon} </div>}

      <Dropdown 
        title={'Selecione seu pokemon inicial'}
        options={['Bulbasalro','Squirtle','Charmeleon']}
        onSelect={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
