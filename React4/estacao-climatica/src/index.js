/*import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
export default function App() {
  window.navigator.geolocation.getCurrentPosition((position) =>
    console.log(position)
  );
  return <div>Meu app</div>;
}
ReactDOM.render(<App />, document.querySelector("#root"));

//a operação é realizada de maneira assíncrona e os resultados são entregues
//em uma função callback, o que inviabiliza o acesso a eles na expressão JSX diretamente.
*/
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Loading from "./Loading";

import { EstacaoClimatica } from "./EstacaoClimatica";
class App extends React.Component {
  //o construtor deixa de ser escrito explicitamente, comentamos a sua definição
  // constructor(props) {
  // super(props)
  // this.state = {
  // latitude: null,
  // longitude: null,
  // estacao: null,
  // data: null,
  // icone: null,
  // mensagemDeErro: null
  // }
  // console.log('construtor')
  // }
  //inicializando o estado sem usar o construtor.
  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null,
  };
  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    //new Date(ano, mês(0 a 11), dia(1 a 31))
    //21/06
    const d1 = new Date(anoAtual, 5, 23);
    //24/09
    const d2 = new Date(anoAtual, 8, 24);
    //22/12
    const d3 = new Date(anoAtual, 11, 22);
    //21/03
    const d4 = new Date(anoAtual, 2, 21);
    const sul = latitude < 0;
    if (data >= d1 && data < d2) return sul ? "Inverno" : "Verão";
    if (data >= d2 && data < d3) return sul ? "Primavera" : "Outono";
    if (data >= d3 || data < d1) return sul ? "Verão" : "Inverno";
    return sul ? "Outono" : "Primavera";
  };

  icones = {
    Primavera: "fa-seedling",
    Verão: "fa-umbrella-beach",
    Outono: "fa-tree",
    Inverno: "fa-snowman",
  };

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        let data = new Date();
        let estacao = this.obterEstacao(data, posicao.coords.latitude);
        let icone = this.icones[estacao];
        console.log(icone);
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone,
        });
      },
      //A seguir, especificamos uma segunda função callback, também enviada como argumento
      //para a função que obtém a localização do usuário. Em caso de sucesso, a primeira - que já
      //havíamos definido - é executada. Caso contrário, a segunda entra em execução. Ela exibe a
      //mensagem de erro como um log para o desenvolvedor (não é boa prática exibir os detalhes
      //internos do aplicativo para o usuário) e uma mensagem para o usuário que explica que um
      //erro aconteceu e que ele pode tentar mais tarde. V
      (erro) => {
        console.log(erro);
        this.setState({ mensagemDeErro: `Tente novamente mais tarde` });
      }
    );
  };

  componentDidMount() {
    this.obterLocalizacao();
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    return (
      // responsividade, margem acima
      <div className="container mt-2">
        {/* uma linha, conteúdo centralizado, display é flex */}
        <div className="row justify-content-center">
          {/* oito colunas das doze disponíveis serão usadas para telas médias em diante */}
          <div className="col-md-8">
            {/*O componente App, por sua vez, deixa de passar data e mensagem de erro ao componente
EstacaoClimatica. Ele decide o que exibir em função da variável mensagemDeErro, que faz
parte de seu estado. O componente EstacaoClimatica somente será colocado na árvore caso
não exista uma mensagem de erro armazenada. Caso contrário, um componente textual
    simples será exibido. */}
            {/*   {this.state.mensagemDeErro ? (
              <p className="border rounded p-2 fs-1 text-center">
                É preciso dar permissão para acesso à localização. Atualize a
                página e tente de novo, ajustando a configuração no seu
                navegador.
              </p>
            ) : (
              <EstacaoClimatica
                icone={this.state.icone}
                estacao={this.state.estacao}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                obterLocalizacao={this.obterLocalizacao}
              /> /*}}
            )}
          </div>
          {/* um cartão Bootstrap */}
            {
(!this.state.latitude && !this.state.mensagemDeErro)?
<Loading mensagem="Por favor, responda à solicitação de localização"/>
:
this.state.mensagemDeErro ? (
              <p className="border rounded p-2 fs-1 text-center">
                É preciso dar permissão para acesso à localização. Atualize a
                página e tente de novo, ajustando a configuração no seu
                navegador.
              </p>
            ) : (
              <EstacaoClimatica
                icone={this.state.icone}
                estacao={this.state.estacao}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                obterLocalizacao={this.obterLocalizacao}
              />
            )}
          </div>
          {/* um cartão Bootstrap */}
          <div className="card">
            {/* o corpo do cartão */}
            <div className="card-body">
              {/* centraliza verticalmente, margem abaixo */}
              <div
                className="d-flex align-items-center border rounded mb-2"
                style={{ height: "6rem" }}
              >
                {/* ícone obtido do estado do componente */}
                <i className={`fas fa-5x ${this.state.icone}`}></i>
                {/* largura 75%, margem no à esquerda (start), fs aumenta a fonte */}
                <p className=" w-75 ms-3 text-center fs-1">
                  {this.state.estacao}
                </p>
              </div>
            </div>
            <p className="text-center">
              {/* renderização condicional */}
              {this.state.latitude
                ? `Coordenadas: ${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.data}`
                : this.state.mensagemDeErro
                ? `${this.state.mensagemDeErro}`
                : "Clique no botão para saber a sua estação climática"}
            </p>
          </div>
          {/* botão azul (outline, 100% de largura e margem acima) */}
          <button
            onClick={this.obterLocalizacao}
            className="btn btn-outline-primary w-100 mt-2"
          >
            Qual a minha estação?
          </button>
          {/*Utilizamos o método
unmountComponentAtNode de ReactDOM para fazer a remoção do div cujo id é root. */}
          <button
            className="btn btn-outline-danger w-100 mt-2"
            onClick={() =>
              ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
            }
          >
            Unmount
          </button>
        </div>
      </div>
    );
  }
}
