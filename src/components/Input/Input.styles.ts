import styled from "styled-components";

const Input = styled.input`
  font-size: 14px;
  border: none;
  height: 25px;
  padding-left: 10px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-shadow: -2px 3px 15px 0px #c9d2e0;
  border-radius: 8px;
  padding: 15px 15px 15px 10px;
  background-color: white;
  width: 80%;

  @media (max-width: 700px) {
    width: 100%;
    margin: 10px;
  }
`;

export const Search = {
  Input,
  Container,
};
