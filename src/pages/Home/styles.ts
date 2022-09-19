import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 6rem;
`;

export const BannerArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const LeftSide = styled.div`
  flex: 1;
`;

export const TextArea = styled.div`
  h1 {
    font-size: 3rem;
    color: ${ props => props.theme.colors.title } 
  }

  p {
    color: ${ props => props.theme.colors.subtitle };
    font-size: 1.5rem;
  }

  @media (max-width: 770px) {
    h1 {
      font-size: 2.3rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export const ItemsArea = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`;

export const RightSide = styled.div`
  width: 40%;

  @media (max-width: 770px) {
    img {
      width: 250px;
    }
  }
`;

