import styled from 'styled-components'

export const Container = styled.div`
  .loader {
    padding: 100px;
    position: relative;
    display: flex;
  }
  .loader:before,
  .loader:after {
    content: '';
    width: 15px;
    height: 15px;
    display: inline-block;
    position: relative;
    margin: 0 5px;
    border-radius: 50%;
    color: #fff;
    background: currentColor;
    box-shadow: 50px 0, -50px 0;
    animation: left 1s infinite ease-in-out;
  }
  .loader:after {
    color: rgba(8, 201, 82, 0.76);
    animation: right 1.1s infinite ease-in-out;
  }

  @keyframes right {
    0%,
    100% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
  }

  @keyframes left {
    0%,
    100% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`
