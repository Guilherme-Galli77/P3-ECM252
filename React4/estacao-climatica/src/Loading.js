import React, { Component } from "react";
export default class Loading extends Component {
  render() {
    return (
      // centralizando nos dois eixos, borda e padding
      <div
        className="d-flex flex-column justify-content-center align-items-center border
    rounded p-3"
      >
        {/* text-whatever troca a cor */}
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
        >
          {/* deve ser utilizado somente por dispositivos de acessibilidade, como leitores de
    tela */}
          <span className="visually-hidden">Carregando...</span>
        </div>

        {/*Suponha que desejamos exibir um texto abaixo do
componente Loading, explicando ao usuário que ele precisa responder ao pedido de acesso
à sua localização




Entretanto, o componente Loading pode ser utilizado em outros contextos, que não
necessariamente envolvem a localização do usuário. Talvez queiramos deixar em aberto a
mensagem a ser exibida, permitindo que ela seja escolhida no contexto de uso do
componente. Podemos fazê-lo facilmente via props. 




Suponha que desejamos tornar o componente Loading um pouco mais flexível, no seguinte
sentido. Ele já permite que seja especificada a mensagem a ser utilizada. Entretanto, pode
ser de interesse que ele tenha uma mensagem mais genérica a ser exibida por padrão,
talvez um simples “Carregando”. 
     <p className="text-primary">{this.props.mensagem|| 'Carregando'}</p>
      </div>
    );
  }
}




O React possui, no entanto, um mecanismo próprio para isso. Seu uso torna o código mais
limpo e elegante. Componentes React possuem uma propriedade chamada defaultProps.
Basta associarmos a ela um objeto JSON que possui todos os props de interesse associados
a seus valores padrão. Uma vez feita a sua definição, o teste explícito feito anteriormente já
não é necessário. 
*/}
   
   <p className="text-primary">{this.props.mensagem}</p>
      </div>
    );
  }
}

//fora da classe que define o coponente
Loading.defaultProps = {
    mensagem: "Carregando"
    }

