import { useState } from "react";
import "./App.css";
import Estado from "./Estado";
import String from "./String";
import Boolean from "./Boolean";
import Lista from "./Lista";
import Objeto from "./Objeto";
import Clase from "./Clase";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h3>Componente importado No1:</h3>
        <Estado />
        <h3>Componente importado No2:</h3>
        <String />
        <h3>Componente importado No3:</h3>
        <Boolean />
        <h3>Componente importado No4:</h3>
        <Lista />
        <h3>Componente importado No5:</h3>
        <Objeto />
        <h3>Componente importado No6:</h3>
        <Clase />
      </div>
    </>
  );
}

export default App;
