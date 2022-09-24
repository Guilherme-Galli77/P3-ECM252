import React from "react";
import ReactDOM from "react-dom";
//Importação de bibliotecas, pode usar outros nomes também
//React e ReactDOm são terminologias convencionadas

//Esse código devolve uma expressão JSX
/*/const App = () => {
    return <div>Meu primeiro componente ReactJS</div>
    }

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)//*/

/*Nota. O método querySelector é capaz de buscar referências na árvore DOM
utilizando qualquer seletor CSS. O método getElementById, por sua vez, faz
buscas utilizando somente o id de um elemento. Ambos resolvem o problema, neste
caso. */

import "./styles.css";
const App = () => {
  const estilosBotao = {
    marginTop: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "blueviolet",
    color: "white",
    border: "none",
    width: "100%",
    borderRadius: 8,
  };
  const textoDoRotulo = "Nome:";
  const obterTextoDoBotao = () => {
    return "Enviar";
  };
  return (
    <div
      style={{
        margin: "auto",
        width: 768,
        backgroundColor: "#EEE",
        padding: 12,
        borderRadius: 8,
      }}
    >
      <label
        className="rotulo"
        htmlFor="nome"
        style={{ display: "block", marginBottom: 4 }}
      >
        {textoDoRotulo}
      </label>
      <input
        type="text"
        id="nome"
        style={{
          paddingTop: 8,
          paddingBottom: 8,
          borderStyle: "hidden",
          width: "100%",
          borderRadius: 8,
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      <button style={estilosBotao}>{obterTextoDoBotao()}</button>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));

//FIM DA APOSTILA 1
///////////////////////////////////////////////////////////////////////////////////////

