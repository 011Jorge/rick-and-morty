import styled from 'styled-components'

export const Container = styled.div`
  margin: 30px 0 50px 0;

  display: flex;
  align-items: center;
  gap: 50px;

  padding: 10px;

  font-family: 'Roboto', sans-serif;

  h1 {
    color: #fff;
  }

  button {
    width: 150px;
    height: 40px;

    cursor: pointer;

    border: none;
    border-radius: 10px;

    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;

    box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);
    -moz-box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);
    -webkit-box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);

    &:hover {
      opacity: 0.6;
      transition: 0.5s;
    }

    //iPhoneX Responsiveness
    @media (max-width: 560px) {
      width: 80px;
      height: 70px;
      border-radius: 50%;
    }
  }
`
