import React, { useContext } from "react";
import { Contador3Contexto } from "../context/Contador3Contexto";

const Contador3 = () => {
  console.log("Contador3.jsx");

  const { contador3, setContador3 } = useContext(Contador3Contexto);

  return (
    <div>
      <h3>Contador 3: {contador3}</h3>
      <button onClick={() => setContador3(contador3 + 1)}>Incrementar</button>
    </div>
  );
};

export default Contador3;
