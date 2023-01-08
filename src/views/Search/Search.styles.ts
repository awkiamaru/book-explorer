import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  width: 800px;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 10px;
    margin: 15px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #4348b3;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 14px;
  padding: 24px;
`;

const Text = styled.p`
  color: #7d81ce;

  font-weight: 400;
  font-size: small;

  text-overflow: ellipsis;
  overflow: hidden;
`;

const Subtitle = styled.h2`
  color: #313482;
  margin: 0.5em 0;
`;

export const Search = {
  Wrapper,
  Container,
  Content,
  Title,
  Subtitle,
  Text,
  Header,
};
