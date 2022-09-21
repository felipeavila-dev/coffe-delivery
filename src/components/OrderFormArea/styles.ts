import styled from "styled-components";

export const Container = styled.div`
  background-color: ${ props => props.theme.colors.card };
  border-radius: 8px;
  padding: 1rem;

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
    padding: 1rem 0;
    width: 100vw;

    span {
      color: red;
    }
  }
`;

export const CheckoutHeader = styled.div`
  display: flex;  
  align-items: baseline;

  @media (max-width: 420px) {
    padding: 0 .5rem;
  }
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

export const FormArea = styled.div`

  display: flex;
  flex-direction: column;

  @media (max-width: 420px) {
    padding: 0 1rem;

    .d-column {
      display: flex;
      flex-direction: column;
    }

    span {
      display: none;
    }

    .required {
      border-left: 2px solid red;
    }
  }
`;

export const FormLine = styled.div`
  display: flex;
  margin: 1rem 0;

  input {
    border-radius: 4px;
    border: 1px solid ${ props => props.theme.colors.button };
    outline: none;
    padding: .75rem; 
    margin: 0 .5rem;
    background-color: ${ props => props.theme.colors.input };
    font-size: 1.2rem;
    color: ${ props => props.theme.colors.label };

    &::placeholder {
      font-size: 1rem;
    }
  }

  span {
    font-weight: bold;
    color: ${ props => props.theme.colors.yellow_dark };
  }

  @media (max-width: 420px) {
    margin: 0;
    
    input {
      margin: 1rem 0;
    }
  }

`;