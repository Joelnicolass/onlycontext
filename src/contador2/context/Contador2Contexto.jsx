import { createContext, useState } from "react";

export const Contador2Contexto = createContext();

const Contador2Provider = ({ children }) => {
  const [contador2, setContador2] = useState(0);

  return (
    <Contador2Contexto.Provider
      value={{
        contador2,
        setContador2,
      }}
    >
      {children}
    </Contador2Contexto.Provider>
  );
};

export default Contador2Provider;
