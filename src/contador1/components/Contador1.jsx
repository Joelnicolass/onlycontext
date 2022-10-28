import React, { useContext } from "react";
import { Contador1Contexto } from "../context/Contador1Contexto";

const Contador1 = () => {
  console.log("Contador1.jsx");

  const { contador1, setContador1 } = useContext(Contador1Contexto);

  return (
    <div>
      <h3>Contador 1: {contador1}</h3>

      <button onClick={() => setContador1(contador1 + 1)}>Incrementar</button>
    </div>
  );
};

export default Contador1;
