import { FunctionComponent } from "react";
import { Book } from "../../api/books/types";
import { Card } from "./Card.styles";
import { ReactComponent as NoContent } from "../../assets/no-content-books.svg";

export type CardBookProps = {
  book: Book;
};

export const CardBook: FunctionComponent<CardBookProps> = ({ book }) => (
  <Card.Container>
    {book.volumeInfo.imageLinks?.smallThumbnail ? (
      <Card.Image src={book.volumeInfo.imageLinks?.smallThumbnail} />
    ) : (
      <NoContent width={130} height={130} />
    )}
    <Card.Content>
      <Card.Title>{book.volumeInfo.title}</Card.Title>
      {book.volumeInfo?.subtitle && (
        <Card.SubTitle>{book.volumeInfo.subtitle}</Card.SubTitle>
      )}
      <Card.Text>By {book.volumeInfo.authors}</Card.Text>
    </Card.Content>
  </Card.Container>
);
