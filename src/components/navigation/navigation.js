import styled from "styled-components";

export const Content = styled.div`
  margin-top: 50px;

  display: flex;
  align-items: center;
  gap: 50px;

  border: 1px solid #fff;

  padding: 10px;

  a {
    color: #fff;
    font-size: 28px;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    border: 1px solid #fff;

    padding: 10px;

    &:hover {
      color: green;
    }
  }
`;
