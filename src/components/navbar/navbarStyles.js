import styled from "styled-components";

export const ContainerNavbar = styled.div`
  width: 100%;
  height: 280px;

  background-color: #0c0c0c;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Goldman", cursive;
`;

export const Image = styled.img`
  width: 380px;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 700px;
  height: 60px;

  padding-left: 20px;

  font-size: 17px;
  font-family: "Goldman", cursive;

  border-radius: 12px;

  outline: none;
  border: none;

  -webkit-box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);
  -moz-box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);
  box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);
`;
