import { FunctionComponent } from "react";
import { NotFound } from "./NotFound.styles";
import { ReactComponent as BookNotFound } from "../../assets/not-found.svg";

export const NotFoundView: FunctionComponent = () => (
  <NotFound.Wrapper>
    <div>a</div>
    <NotFound.Container>
      <BookNotFound width={270} height={270} />
      <h1>Books not found</h1>
      <p>
        The book you searched for was not found, look for other references such
        as author or publisher
      </p>
    </NotFound.Container>
  </NotFound.Wrapper>
);
