import Counter from './componentes/Counter/Counter'
import Dropdown from './componentes/Dropdown/Dropdown'
import Todo from './componentes/Todo/Todo'
import { useState } from 'react';

import './App.css'

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

      <hr />

      <Todo />

    </div>
  );
}

export default App;
