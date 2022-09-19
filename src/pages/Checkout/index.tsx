import { Container,HeaderTitle, OrderArea } from "./styles";


import { CartArea } from "../../components/CartArea";
import { PaymentArea } from "../../components/PaymentArea";
import { OrderFormArea } from "../../components/OrderFormArea";

export const Checkout = () => {
  return (
    <Container>
      <OrderArea>
        
        <HeaderTitle> Complete seu pedido </HeaderTitle>
        
        <OrderFormArea />

        <PaymentArea />

      </OrderArea>

      <CartArea />
    </Container>
  );
}