import styled from 'styled-components'

export const H1 = styled.h1`
  margin: 40px;

  color: #fff;
  font-size: 50px;
  font-family: 'Goldman', cursive;

  //iPhoneX Responsiveness
  @media (max-width: 380px) {
    font-size: 40px;
  }

  //monitor's responsiveness
  @media (max-width: 1800px) {
    font-size: 35px;
  }
`

export const ContainerCharacter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: auto;
  justify-content: stretch;
  gap: 50px;

  @media (max-width: 560px) {
    gap: 300px;
  }

  //monitor's responsiveness
  @media (max-width: 1800px) {
    grid-template-columns: repeat(2, auto);
  }

  //iPhone responsivies
  @media (max-width: 1300px) {
    grid-template-columns: repeat(1, auto);
  }
`

export const Card = styled.div`
  width: 510px;
  height: 220px;

  display: flex;

  background-color: #3c3e44;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;

  img {
    margin-right: 12px;
    border-radius: 10px 0 0 10px;

    //ipad responsiveness
    @media (max-width: 660px) {
      width: 200px;
      min-height: auto;
    }
  }

  //iPhoneX Responsiveness
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    width: 300px !important;
    height: auto !important;
  }

  //ipad responsiveness
  @media (max-width: 660px) {
    width: 500px;
    height: 100% !important;
  }

  //monitor's responsiveness
  @media (max-width: 1800px) {
    height: 190px !important;
  }
`

export const InfoCharacters = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;

  h2,
  h4 {
    color: #fff;
    padding-top: 5px;

    :hover {
      color: rgb(255, 152, 0);
      cursor: default;
    }
  }

  h2 {
    //monitor's responsiveness
    @media (max-width: 1800px) {
      font-size: 22px;
      padding-bottom: 6px;
    }
  }

  p {
    padding-top: 10px;
    color: rgb(158, 158, 158);

    //monitor's responsiveness
    @media (max-width: 1800px) {
      font-size: 12px;
    }
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
`
