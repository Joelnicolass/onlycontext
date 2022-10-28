import { createContext, useState } from "react";

export const Contador1Contexto = createContext();

//--------------------------------------------------------
const Contador1Provider = ({ children }) => {
  const [contador1, setContador1] = useState(0);

  const [nombre, setNombre] = useState("");

  return (
    <Contador1Contexto.Provider
      value={{
        contador1,
        setContador1,
        nombre,
        setNombre,
      }}
    >
      {children}
    </Contador1Contexto.Provider>
  );
};

export default Contador1Provider;
