import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const App = (props) => {
  const contador = useState(13);

  const contadorValue = contador[0];
  const updateContador = contador[1];

  setInterval(() => {
    updateContador(contadorValue + 1);
  }, 2000);

  return (
    <div>
      <p>El valor del contador es</p>
      <h1>{contadorValue}</h1>
      <h2>Magia de React</h2>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
