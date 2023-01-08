import {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Search } from "./Input.styles";
import { FiSearch, FiX } from "react-icons/fi";
import { useDebounce } from "../../hooks";

export type SearchInputProps = {
  onChange: (value: string) => void;
  onClear?: () => void;
};

export const SearchInput: FunctionComponent<SearchInputProps> = ({
  onChange,
  onClear,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState("");
  const handledValue = useDebounce<string>(value, 500);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value),
    []
  );

  const handleClear = useCallback(() => {
    if (inputRef.current?.value) {
      inputRef.current.value = "";
      setValue("");

      onClear?.();
    }
  }, []);

  useEffect(() => onChange(handledValue), [handledValue]);

  return (
    <Search.Container>
      <FiSearch size={25} color="#8385D1" />
      <Search.Input
        ref={inputRef}
        type="text"
        placeholder="Search by author, name or book"
        onChange={handleChange}
      />
      {value && <FiX size={25} color="#8385D1" onClick={handleClear} />}
    </Search.Container>
  );
};
