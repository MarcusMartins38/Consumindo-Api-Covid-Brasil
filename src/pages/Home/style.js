import styled from "styled-components";

export const Header = styled.header`
  height: 165px;
  width: 100%;
  background-color: #333333;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BoxInfo = styled.div`
  width: 243px;
  height: 113px;
  border: 0;
  border-radius: 15px;

  background-color: #12b2e2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:first-child {
    background-color: #01df69;
  }

  &:last-child {
    background-color: #fb232e;
  }

  p {
    font-family: "Roboto Slab", serif;
    font-weight: 500;

    & + p {
      margin-top: 10px;
      color: white;
      font-weight: bold;
      font-size: 19px;
    }
  }
`;

export const Body = styled.body`
  text-align: center;

  select {
    width: 400px;
    height: 40px;
    margin: 25px 0;
  }

  h1 {
    position: absolute;
    margin-left: 150px;
    margin-top: 30px;
    color: white;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  max-width: 1000px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 20px;
  background: #333333;

  p {
    font-family: "Roboto Slab", serif;
    font-weight: 500;

    & + p {
      color: white;
      font-weight: bold;
    }
  }
`;
