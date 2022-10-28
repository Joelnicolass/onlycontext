import React, { useState } from "react";
import Contador1 from "./contador1/components/Contador1";
import Contador1Provider from "./contador1/context/Contador1Contexto";
import Contador2 from "./contador2/components/Contador2";
import Contador2Provider from "./contador2/context/Contador2Contexto";
import Contador3 from "./contador3/components/Contador3";
import { Contador3Contexto } from "./contador3/context/Contador3Contexto";
import Nombre from "./nombre/components/Nombre";

const App = () => {
  const [contador3, setContador3] = useState(0);

  return (
    <Contador3Contexto.Provider
      value={{
        contador3,
        setContador3,
      }}
    >
      <Contador2Provider>
        <Contador1Provider>
          <Contador1 />
          <Contador2 />
          <Contador3 />
          <Nombre />
        </Contador1Provider>
      </Contador2Provider>
    </Contador3Contexto.Provider>
  );
};

export default App;
