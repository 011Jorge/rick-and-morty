import styled from 'styled-components'

import test from '../../images/footer.svg'

export const ContainerHome = styled.div``

export const Header = styled.header`
  color: #fff;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding-top: 280px;

  @media (max-width: 1400px) {
    padding-top: 220px;
  }

  img {
    @media (max-width: 450px) {
      width: 200px !important;
    }

    @media (max-width: 650px) {
      width: 350px !important;
    }

    @media (max-width: 1400px) {
      width: 300px !important;
    }
  }

  h1 {
    font-size: 60px;
    font-family: 'Goldman', cursive;

    @media (max-width: 450px) {
      width: 220px;
      margin: 0 auto;
    }

    //ipad responsiveness
    @media (max-width: 900px) {
      font-size: 30px;
    }

    //monitor's responsiveness
    @media (max-width: 1400px) {
      font-size: 35px;
    }
  }

  p {
    font-size: 23px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;

    //ipad responsiveness
    @media (max-width: 900px) {
      margin: 0 auto !important;
      padding-top: 5px;

      font-size: 18px;
      width: 400px;
    }

    @media (max-width: 450px) {
      font-size: 13px;
      width: 220px;
      padding-top: 10px;
    }

    @media (max-width: 1400px) {
      font-size: 16px;
    }
  }
`

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
  @media (max-width: 700px) {
    margin: 60px 0;
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 400px;

  background-image: url(${test});
`
