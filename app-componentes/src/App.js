import Counter from './componentes/Counter/Counter'
import Dropdown from './componentes/Dropdown/Dropdown'
import Todo from './componentes/Todo/Todo'
import Login from './componentes/Login/Login'
import TitleCard from './componentes/TitleCard/TitleCard'
import FetchAPI from './componentes/FetchAPI/FetchAPI'

import Contador from './componentes/Contador/Contador'
import CardTexto from './componentes/CardTexto/CardTexto'
import { useState } from 'react';

import './App.css'

function App() {
  
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  return (
    <div className="App">
      <Contador />

      <hr />

      <CardTexto />
      
      <hr />
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

      <hr />

      <Login />

      <hr />

      <TitleCard title1="My title" />
      
      <hr />
      <FetchAPI />
    </div>

  );
}

export default App;
