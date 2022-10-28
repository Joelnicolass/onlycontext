import React, { useContext } from "react";

import { Contador2Contexto } from "../context/Contador2Contexto";

const Contador2 = () => {
  console.log("Contador2.jsx");

  const { contador2, setContador2 } = useContext(Contador2Contexto);

  return (
    <div>
      <h3>Contador 2: {contador2}</h3>

      <button onClick={() => setContador2(contador2 + 1)}>Incrementar</button>
    </div>
  );
};

export default Contador2;
