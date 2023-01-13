import styled from "styled-components";

export const ContainerHome = styled.div``;

export const Section = styled.div`
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
