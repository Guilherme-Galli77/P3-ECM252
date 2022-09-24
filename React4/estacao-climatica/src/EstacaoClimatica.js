//Nossa aplicação possui um único componente responsável
//por resolver todos os problemas, o que viola diversos princípios do desenvolvimento, como
//a alta coesão. Como sabemos, essa prática tende a dar origem a código de difícil
//manutenção, baixo nível de reusabilidade etc. Por essa razão, vamos criar um componente
//cuja finalidade será apenas exibir os dados referentes à estação climática e data, uma vez
//que eles estiverem disponíveis.

import React from "react";
export class EstacaoClimatica extends React.Component {
    timer = null
  //  O componente EstacaoClimatica será o responsável por atualizar a data a cada segundo.
//Por isso, ela passa a ser definida em seu estado, 

componentDidMount(){
    console.log("componentDidMount")
    this.timer = setInterval (() => {
    this.setState({data: new Date().toLocaleTimeString()})
    }, 1000)
    }
    componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timer)
    }
    componentDidUpdate(){
    console.log ('componentDidUpdate')
    }
    state = {
        data: null
        }
  render() {
    console.log('render')
    return (
      <div className="card">
        {/* o corpo do cartão */}
        <div className="card-body">
          {/* centraliza verticalmente, margem abaixo */}
          <div
            className="d-flex align-items-center border rounded mb-2"
            style={{ height: "6rem" }}
          >
            {/* ícone obtido do estado do componente */}
            <i className={`fas fa-5x ${this.props.icone}`}></i>
            {/* largura 75%, margem no à esquerda (start), fs aumenta a fonte */}
            <p className=" w-75 ms-3 text-center fs-1">{this.props.estacao}</p>
          </div>
          <div>
            <p className="text-center">

                {/*- O componente deixa de utilizar a data recebida via props e passa a utilizar aquela definida
em seu estado. Além disso, ele deixa de verificar se uma
mensagem de erro deve ser exibida, pois ele somente será renderizado caso o usuário
    tenha dado permissão de acesso à localização*/}
              {/* renderização condicional */}
              {
this.props.latitude ?
`Coordenadas: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.state.data}`
:
'Clique no botão para saber a sua estação climática'
}
            </p>
          </div>
          {/* botão azul (outline, 100% de largura e margem acima) */}
          <button
            onClick={this.props.obterLocalizacao}
            className="btn btn-outline-primary w-100
    mt-2"
          >
            Qual a minha estação?
          </button>
        </div>
      </div>
    );
  }
}
