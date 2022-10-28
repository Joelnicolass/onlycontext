import React, { memo, useContext } from "react";
import { Contador1Contexto } from "../../contador1/context/Contador1Contexto";

const Nombre = () => {
  console.log("Nombre.jsx");

  const { nombre, setNombre } = useContext(Contador1Contexto);

  return (
    <div>
      <h3>Nombre: {nombre}</h3>

      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
    </div>
  );
};

export default Nombre;
