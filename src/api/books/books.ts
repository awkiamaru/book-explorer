import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { url } from "../../config/enviroment";
import { formatValuesToQueryParams } from "../../utils/transform";
import { BookRes } from "./types";

const api = axios.create({
  baseURL: url(),
});

export const fetchBooks = async (searchQuery: string): Promise<BookRes> => {
  return api
    .get(`?q=${formatValuesToQueryParams(searchQuery)}&maxResults=40`)
    .then((res) => res.data)
    .catch(() => ({
      kind: "books#volumes",
      totalItems: 0,
      items: [],
    }));
};

export const useSearchBooks = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (searchInput: string) => fetchBooks(searchInput),
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });
};
