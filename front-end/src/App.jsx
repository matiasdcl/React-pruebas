//VERSION ORIGINAL
/*
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button className="custom-button"  onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    </>
  )
}

export default App
*/


// VERSION 2 (1 SOLO BOTON)
/*
import { useState } from 'react';
import './App.css';
import { Button } from './components';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Button label={`count is ${count}`} parentMethod={handleClick} />
    </>
  );
}

export default App;
*/


//VERSION 3 (3 BOTONES)
/*
import { useState } from 'react';
import './App.css';
import { Button } from './components/index';

function App() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [reset, setReset] = useState(false);

  const incrementar = () => setCount((c) => c + 1);
  const contarClicks = () => setClicks((c) => c + 1);
  const reiniciarTodo = () => {
    setCount(0);
    setClicks(0);
    setReset(true);
    setTimeout(() => setReset(false), 1000);
  };

  return (
    <>
      <Button label={`Contador: ${count}`} parentMethod={incrementar} />
      <Button label={`Clicks: ${clicks}`} parentMethod={contarClicks} />
      <Button label="Resetear" parentMethod={reiniciarTodo} />

      {reset && <p>¡Valores reiniciados!</p>}
    </>
  );
}

export default App;
*/


//FoodApp
import { useState } from 'react';
import './App.css';
import { FoodCard } from './components';
import comidas from "./FoodList.json";

function App() {
  return (
    <div className="contenedor">
      <h1>Menú del Día</h1>
      <div className="lista-comidas">
        {comidas.map((comida, index) => (
          <FoodCard
            key={index}
            nombre={comida.nombre}
            emoji={comida.emoji}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
