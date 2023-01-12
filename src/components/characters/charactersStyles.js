import styled from "styled-components";

export const H1 = styled.h1`
  margin: 40px;

  color: #fff;
  font-size: 50px;
  font-family: "Goldman", cursive;
`;

export const ContainerCharacter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: auto;
  justify-content: stretch;
  gap: 50px;
`;

export const Card = styled.div`
  width: 510px;
  height: 190px;

  display: flex;

  background-color: #3c3e44;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;

  img {
    margin-right: 12px;
    border-radius: 10px 0 0 10px;
  }
`;

export const InfoCharacters = styled.div`
  padding-top: 15px;

  h2,
  h4 {
    color: #fff;
    padding-top: 5px;

    :hover {
      color: rgb(255, 152, 0);
      cursor: default;
    }
  }

  p {
    padding-top: 10px;
    color: rgb(158, 158, 158);
  }

  .dead,
  .alive {
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    border-radius: 50%;
    display: inline-block;
  }

  .dead {
    background: rgb(214, 61, 46);
  }

  .alive {
    background: rgb(85, 204, 68);
  }
`;
