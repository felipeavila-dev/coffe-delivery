import styled from "styled-components";

export const Container = styled.div`
  background-color: ${ props => props.theme.colors.card };
  border-radius: 8px;
  padding: 1rem;
  margin-top: 2rem;

  p, small {
    color: ${ props => props.theme.colors.subtitle };
  }

  >span {
    color: ${ props => props.theme.colors.subtitle };
    font-weight: bold;
    font-size: .8rem;
    align-content: center;
    margin-left: 1rem;
  }

  @media (max-width: 420px) {
    width: 100vw;
    padding: 1rem .5rem;
  }
`;

export const CheckoutHeader = styled.div`
  display: flex;  
  align-items: baseline;
`;

export const OrderIcon = styled.div`
  margin-right: .5rem;
`;
export const OrderTitle = styled.div`
  p {
    font-size: 1.3rem; 
    font-weight: lighter;
    margin-bottom: .5rem;

  }

  small {
    font-size: 1rem;
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 2rem;
  margin: 1.5rem 0;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
