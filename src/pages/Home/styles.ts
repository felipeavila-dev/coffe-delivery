import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 6rem;

  @media (max-width: 420px) {
   padding: 0 2rem;
  }
`;

export const BannerArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  @media (max-width: 420px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
    "LOGO"
    "TEXT";
  }
`;

export const LeftSide = styled.div`
  grid-area: TEXT;
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

  @media (max-width: 420px) {
    text-align: center;

    h1 {
      font-size: 2rem;
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

  @media (max-width: 420px) {
    grid-area: LOGO;
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      width: 200px;
    }
  }
`;

