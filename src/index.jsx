import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <h1>Foo</h1>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
