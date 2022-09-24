//A essa altura, a definição do componente Pedido ainda inclui os detalhes referentes
//à definição de um cartão Bootstrap. Para completar esse passo da refatoração,
//precisamos removê-las,

/*import React from "react";
const Pedido = (props) => {
  return (
    <div className="card">
      {/* cabeçalho do cartão */
/*<div className="card-header text-muted">{props.data}</div>
      {/* corpo do cartão */
/* <div className="card-body d-flex">
        <div className="d-flex align-items-center">
          <i className={props.icone}></i>
        </div>
        {/* flex-grow 1: tomar espaço remanescente */
/*   <div className="flex-grow-1 ms-2 border">
          <h4 className="text-center">{props.titulo}</h4>
          <p className="text-center">{props.descricao}</p>
        </div>
      </div>
    </div>
  );
};
export default Pedido; /*/

const Pedido = ({ icone, titulo, descricao }) => {
  return (
    <div className="d-flex">
      <div className="d-flex align-items-center">
        <i className={`${icone}`}></i>
      </div>
      <div className="flex-grow-1 ms-2 border">
        <h4 className="text-center">{titulo}</h4>
        <p className="text-center">{descricao}</p>
      </div>
    </div>
  );
};
export default Pedido;
