import { FunctionComponent, useCallback } from "react";
import { SearchInput } from "../../components/Input";
import { Search } from "./Search.styles";
import { ReactComponent as Folder } from "../../assets/folder.svg";
import { ReactComponent as Searching } from "../../assets/searching-books.svg";
import { CardBook } from "../../components/Card";
import { useSearchBooks } from "../../api/books/books";

export const SearchView: FunctionComponent = () => {
  const { mutate, data, isLoading } = useSearchBooks();

  const onChange = useCallback((value: string) => mutate(value), [mutate]);

  return (
    <Search.Wrapper>
      <Search.Container>
        <Search.Header>
          <Search.Title>Book Explorer</Search.Title>
          <Folder width={170} height={170} />
        </Search.Header>
        <SearchInput onChange={onChange} />
      </Search.Container>
      {isLoading ? (
        <>
          <Searching width={200} height={200} />
          <Search.Subtitle>Searching for books</Search.Subtitle>
          <Search.Text>
            We are searching for books related to your search
          </Search.Text>
        </>
      ) : (
        <Search.Content>
          {data &&
            data.items.map((book) => <CardBook book={book} key={book.id} />)}
        </Search.Content>
      )}
    </Search.Wrapper>
  );
};
