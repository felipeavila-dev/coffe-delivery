import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 1rem;
  padding: 1rem 6rem;

  @media (max-width: 770px ) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }

  @media (max-width: 420px ) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const OrderArea = styled.div`
`;

export const HeaderTitle = styled.h3`
  margin: 1rem 0;

  @media (max-width: 420px) {
    margin-left: 1rem;
  }
`