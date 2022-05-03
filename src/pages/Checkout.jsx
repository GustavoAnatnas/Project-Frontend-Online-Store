import React, { Component } from 'react';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        {/* <div>

        </div> */}
        <div>
          <h2>Informações do comprador</h2>
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
          />
          <input data-testid="checkout-cpf" type="text" placeholder="CPF" />
          <input data-testid="checkout-email" type="email" placeholder="Email" />
          <input data-testid="checkout-phone" type="text" placeholder="Telefone" />
          <input data-testid="checkout-cep" type="text" placeholder="CEP" />
          <input data-testid="checkout-address" type="text" placeholder="Endereço" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Cidade" />
          <select>
            <option>
              RJ
            </option>
          </select>
        </div>
        {/* <div>
          <h2>Método de pagamento</h2>
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div> */}

      </div>

    );
  }
}
