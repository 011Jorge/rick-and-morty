import styled from 'styled-components'

export const ContainerNavbar = styled.div`
  width: 100%;
  height: 240px;

  background: rgba(255, 255, 255, 0.35);
  -webkit-backdrop-filter: blur(13.5px);
  backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);
  -moz-box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);
  -webkit-box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Goldman', cursive;

  @media (max-width: 1400px) {
    height: 200px;
  }
`

export const Image = styled.img`
  width: 380px;
  margin: 0;
  margin: 15px;

  //iPhone5/SE responsiveness
  @media (max-width: 400px) {
    width: 250px !important;
  }

  //iPhoneX responsiveness
  @media (max-width: 560px) {
    width: 300px;
  }

  //monitor's responsiveness
  @media (max-width: 1800px) {
    width: 300px;
    margin: 10px;
  }
`

export const Input = styled.input`
  width: 700px;
  height: 60px;

  padding-left: 20px;

  font-size: 17px;
  font-family: 'Goldman', cursive;

  border-radius: 12px;

  outline: none;
  border: none;

  -webkit-box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);
  -moz-box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);
  box-shadow: 6px 7px 18px 0px rgba(8, 201, 82, 0.76);

  //iPhoneX responsiveness
  @media (max-width: 560px) {
    width: 300px !important;
  }

  //ipad responsiveness
  @media (max-width: 750px) {
    width: 500px;
  }

  //monitor's responsiveness
  @media (max-width: 1800px) {
    width: 500px;
    height: 40px;
  }
`
