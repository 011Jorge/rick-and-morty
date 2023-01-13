import styled from "styled-components";

export const ContainerHome = styled.div``;

export const Header = styled.header`
  color: #fff;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 60px;
    font-family: "Goldman", cursive;
  }

  p {
    font-size: 23px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
`;

export const Section = styled.section`
  margin: 60px;
  height: auto;

  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #0c0c0c;
  border-radius: 12px;

  //iPhoneX responsiveness
  @media (max-width: 560px) {
    margin: 60px 0;
  }
`;
