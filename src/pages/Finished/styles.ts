import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;

  @media (max-width: 770px) {
    align-items: center;
  }

`;
export const HeaderTitle = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    color: ${ props => props.theme.colors.yellow_dark };
  }

  p {
    font-size: 1rem;
    color: ${ props => props.theme.colors.subtitle };
  }
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
      "IMAGE"
      "INFO"
    ;
  }
`
export const OrderStatus = styled.div`
  grid-area: INFO;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 3rem;
 
  border: 1px solid ${props => props.theme.colors.yellow_dark};
  /* border-image: linear-gradient(${props => props.theme.colors.purple_dark}, ${props => props.theme.colors.yellow_dark}) 1; */
  border-radius: 8px 32px 8px 32px;

  @media (max-width: 770px) {
    justify-self: center;
  }
`
export const ImageArea = styled.div`
  grid-area: IMAGE;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 50%;
  }

  @media (max-width: 770px) {
    align-items: center;
    justify-self: center;
    margin-bottom: 2rem;
  }
`
