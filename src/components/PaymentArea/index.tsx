import { PaymentOption } from "../PaymentOption";
import { CheckoutHeader, Container, OrderIcon, OrderTitle, PaymentOptions } from "./styles";

import { CurrencyDollar } from 'phosphor-react';
import { useContext } from "react";
import { Context } from "../../contexts/Context";


export const PaymentArea = () => {
  const { paymentMethod } = useContext(Context);
  
  return (
    <Container>
      <CheckoutHeader>
          <OrderIcon>
            <CurrencyDollar weight="fill" color='#8047F8' size='1.5rem' />
          </OrderIcon>
          <OrderTitle>
            <p> Pagamento </p>
            <small>O pagamento é feito na entrega. Escolha a forma que deseja pagar</small>
          </OrderTitle>
      </CheckoutHeader>

      <PaymentOptions>
        <PaymentOption
          text='Cartão de crédito'
          value='Crédito'
          selectedMethod={ paymentMethod === 'Crédito' ? true : false }
        />
        <PaymentOption
          text='Cartão de débito'
          value='Débito'
          selectedMethod={ paymentMethod === 'Débito' ? true : false }
        />
        <PaymentOption
          text='Dinheiro'
          value='Dinheiro'
          selectedMethod={ paymentMethod === 'Dinheiro' ? true : false }
        />
      </PaymentOptions>
    </Container>
  );
}