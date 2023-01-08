import styled from "styled-components";

const Container = styled.div`
  min-width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: -2px 3px 15px 0px #c9d2e0;
  flex-direction: row;
  display: flex;
  gap: 16px;
  padding: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  overflow: hidden;
  white-space: nowrap;
`;

const Image = styled.img`
  border-radius: 8px;
  max-height: 130px;
`;

const Title = styled.h3`
  color: #313482;
  margin: 0;

  text-overflow: ellipsis;
  overflow: hidden;
`;

const SubTitle = styled.h4`
  color: #7d81ce;
  font-weight: 300;
  font-size: small;
  margin: 0;

  text-overflow: ellipsis;
  overflow: hidden;
`;

const Text = styled.p`
  color: #7d81ce;
  margin: 4px 0;

  font-weight: 400;
  font-size: small;

  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Card = {
  Container,
  Content,
  Image,
  Title,
  SubTitle,
  Text,
};
