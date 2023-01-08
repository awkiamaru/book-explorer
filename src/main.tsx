import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "./views";
import { SearchView } from "./views/Search";
import { GlobalStyle } from "./main.styles";
import { NotFoundView } from "./views/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<SearchView />} />
          <Route path="/details/{bookId}" element={<Details />} />
          <Route path="/not-found" element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
