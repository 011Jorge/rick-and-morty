import styled from "styled-components";

export const ContainerCharacter = styled.div`
  .cardCharacters {
    display: flex;
    flex-direction: row;

    width: 500px;
    height: 250px;

    background-color: #3c3e44;

    p {
      font-size: 16px;
    }

    .imageCardCharacters {
      width: auto;
      height: auto;
    }

    .nameCardCharacters {
      font-size: 25px;
      font-weight: bold;
      color: #fff;
    }

    .textCardCharacters {
      font-size: 17px;
      color: #fff;
    }

    .infoLiveCardCharacters {
      display: flex;
      flex-direction: row;
      gap: 5px;
      color: #fff;
    }

    .infoLocation {
      margin-bottom: 15px;
    }

    .labelInfo {
      margin: auto;

      font-size: 16px;
      color: rgb(158, 158, 158);
    }
  }
`;

export const ContainerCard = styled.div``;
